### Goal: 
Learn Reinforcement Learning and implement it on robotic car
### SubGoals:
Learn Robot tracking and localization(also for other project, learn multi-object tracking)
<br>
Learn Image Segmentation(for other side project)
### Day 1: 1/3/2019
Started Move37 course 
Completed Markov Decision Process
#### What I learned:
##### MDP
A Markov process is based on the idea that the future state is dependant only on the previous timestep
For a Markov Devision Process the update rule is:
<br>
V(S) = R(S,a) + gamma * V(S`)
##### Kalman Filtering:
can be implemented using gaussian function
mu is the mean while sigma is the uncertainty
There is an update rule and a prediction rule
<br>
update:
<br>
mu = mu*sigma_prev + mu_prev*sigma/(sigma_prev+sigma)
<br>
sigma = 1/((1/sigma_prev)+(1/sigma))
<br>
predict:
<br>
mu = mu + mu_prev
<br>
sigma = sigma + sigma_prev
### Day 2: 1/4/2019
completed first programming assignment of Move37
<br>
installed gym in new virtual environment
<br>
ran random search and hill climbing algorithm
### Day 3: 1/5/2019
completed Bellman Equation and Dynamic Programming
<br>
Learned Value Iteration:
<ol>
<li>
initialize all values to 0 for each state
</li>
<li>
loop over every possible state s
</li>
<li>
from state s loop over every possible action a
</li>
<li>
get list of all (probablity, reward, s`) tuples from state s, action a
</li>
<li>
expected_rewards = sum of all possible rewards multiplied by their probablities
</li>
<li>
expected_value = lookup V(S`) for each possible S`, multiply by P(S`), sum
</li>
<li>
action_value = expected_reward + GAMMA * expected_value
</li>
<li>
set V[S`] to be the best action_value found
</li>
<li>
repeat 2-8 until the largest change in V[S] between iterations is below threshold
</li>
</ol>

<br>
Learned Stochastic Update rule:
V(s,a) = R(S,a) + gamma *((sum over all ``S` ``)(P(``S` ``|S,a) * V(S`))
<br>
Started 2 wheeled robot series in ROS https://www.youtube.com/watch?v=jmCR225ORs0
<br>
<ol>
TODO: 
<li>try the code for policy iteration</li>
<li>try negative values (-1 and -0.5) for cost function</li>
<li>complete 2 wheeled robot series and install ROS in raspberry pi</li>
</ol>
<br>