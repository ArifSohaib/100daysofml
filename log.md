### Goal: 
Learn Reinforcement Learning and implement it on robotic car
### SubGoals:
Learn Robot tracking and localization(also for other project, learn multi-object tracking)
Learn Image Segmentation(for other side project)
### Day 1: 1/3/2019
Started Move37 course 
Completed Markov Decision Process
#### What I learned:
##### MDP
A Markov process is based on the idea that the future state is dependant only on the previous timestep
For a Markov Devision Process there is an update rule and there is a prediction rule.
V(S) = R(S,a) + gamma * V(S`)
##### Kalman Filtering:
can be implemented using gaussian function
mu is the mean while sigma is the uncertainty
There is an update rule and a prediction rule
update:
mu = mu*sigma_prev + mu_prev*sigma/(sigma_prev+sigma)
sigma = 1/((1/sigma_prev)+(1/sigma))
predict:
mu = mu + mu_prev
sigma = sigma + sigma_prev

