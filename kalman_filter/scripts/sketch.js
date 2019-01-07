var update = function(mean1, var1, mean2, var2){
    let new_mean = ((mean1 * var2) + (mean2 * var1))/(var1+var2);
    let new_var = 1/((1/var1)+(1/var2));
    return {"mean":new_mean, "var":new_var}
};
var predict = function(mean1, var1, mean2, var2){
    let new_mean = mean1 + mean2;
    let new_var = var1 + var2;
    return {"mean":new_mean, "var":new_var}
}
var normalUpdate = function(){
    for (var i = 0; i<measurements.length;i++){
        [mu, sig] = update(measurements[i],measurement_sig,mu,sig);
        [mu, sig] = predict(motion[i],motion_sig,mu,sig);
    }
};


var Kalman = function(mean1, mean2, var1, var2){
    this.mean1 = mean1;
    this.mean2 = mean2;
    this.var1 = var1;
    this.var2 = var2;
}

Kalman.prototype.update = function(new_reading){
    var prev_var = this.var1;
    this.mean1 = ((new_reading * this.var2) + (this.mean2 * prev_var))/(prev_var + this.var2);
    this.var1 = 1/((1/prev_var)+(1/this.var2));
};

Kalman.prototype.predict = function(new_reading){
    this.mean1 = new_reading + this.mean2;
    this.var1 = this.var1 + this.var2;
};
var measurements = [5.0, 6.0, 7.0, 9.0, 10.0];
var motions = [1.0, 1.0, 2.0, 1.0, 1.0];
var motion_sigma = 2.0;
var measurement_sigma = 4.0;
var count = 0;
//mu is the innitial estimate
var mu = 0.0;
//sig is the initial uncertainty
var sig = 10000.0;
var kalman = new Kalman(measurements[count],measurement_sigma, mu, sig);

var setup = function(){
    createCanvas(600,600);
    frameRate(1);
};

var draw = function(){
    background(51);
    textAlign(RIGHT);
    fill(200);
    noStroke();
    textSize(20);
    new_val = update(measurements[count],measurement_sigma, mu, sig);    
    mu = new_val.mean;
    sig = new_val.var;
    // text("Mean:" + mu, width/2, height/2);
    // text("Var:" + sig, width/2, height/4);

    new_val = predict(motions[count],motion_sigma, mu, sig);    
    console.log(new_val)
    mu = new_val.mean;
    sig = new_val.var;
    text("Mean after predict:" + mu, width-150, height/16);
    text("Var after predict:" + sig, width-150, height/8);
    text("measurement: " + measurements[count], width/2, height/8+40);
    text("motion: " + motions[count], width/2, height/8+80);
    // kalman.update(measurements[count])
    // kalman.predict(motions[count])
    count += 1;
    if(count == measurements.length){
        count = 0;
        mu = 0.0;
        sig = 10000.0;
    }
    // text("Mean:" + kalman.mean1, width/2, height/2);
    // text("Var:" + kalman.mean1, width/2, height/4);
};

var normalUpdate = function(){
    for (var i = 0; i<measurements.length;i++){
        [mu, sig] = update(measurements[i],measurement_sig,mu,sig);
        [mu, sig] = predict(motion[i],motion_sig,mu,sig);
    }
};