2D Kalman filter can be used to find velocity from position
The velocity is implied
The veloity can be used to infer the acceleration
This acceleration reading can be corelated with the Zephyr sensor
### High Dimensional Gaussian
Mean is replaced with a vector
Variance is replaced with coveriance
Formula can be looked up and doesn't need to be remembered
<br>
x` = x + x^.
<br> 
x^. is an unobservable variable. x` is the predicted new location which depends on the unobserved variable x^. and the value of x in the previous timestep.

### big lesson
vaiables of a kalman filter are states
<br>
they are divided into observable and hidden
<br>
because those two interact, subsiquent observations of the observable variable give info about hidden variables
<br>
i.e. from multiple observations of the location of a object, we can find its velocity.

### to design a kalman filter
we need two things:
<ul>
<li>
for the states, we need a state transition function
this is usually a matrix
</li>
<li>
for the measurements, we need a measurement function
</li>
</ul>

### 2d kalman filter notes:
##### Predict
next_x = prev_x * state_update + control_input_model*input_value
error_covariance = state_update * prev_error_cov * transpose(state_update) + process_noise
##### Update
error = measurement - H*next_x
innovation_cov = H * error_covarience * transpose(H) + R
kalman_gain = error_covarience * transpose(H) * inverse(innovation_cov)
prev_x = next_x + kalman_gain*error
prev_error_cov = (identity - kalman_gain*H) * error_covariance

##### How to initialize values of the above variables