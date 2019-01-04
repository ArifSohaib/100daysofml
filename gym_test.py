import gym
import numpy as np 


def run_episode(env, parameters, render=False):
    observation = env.reset()
    totalreward = 0
    for _ in range(200):
        if(render):
            env.render()
        action = 0 if np.matmul(parameters, observation) < 0 else 1
        observation, reward, done, info = env.step(action)
        print(f"observation:{observation}")
        
        print(f"done:{done}")
        print(f"info:{info}")
        totalreward += reward
        print(f"totalreward:{totalreward}")
        if done:
            #env.close()
            break
    return totalreward

def random_search():
    env.reset()
    bestParams = None
    bestReward = 0
    for i_episode in range(10000):
        #choose 4 random values(as the size of observation is 4 here)
        parameters = np.random.rand(4) * 2 - 1
        reward = run_episode(env, parameters)
        if reward > bestReward:
            bestReward = reward
            bestParams = parameters
            if reward >= 200:
                print(f"found in {i_episode} episodes")
                run_episode(env, bestParams, True)
                env.close()
                break

def hill_climbing():
    env.reset()
    bestParams = None
    bestReward = 0
    for i_episode in range(10000):
        #add a random noise scaled by this parameter
        noise_scaling = 0.1
        #choose 4 random values(as the size of observation is 4 here)
        parameters = np.random.rand(4) * 2 - 1
        reward = run_episode(env, parameters + (np.random.rand(4)*2-1) * noise_scaling)
        if reward > bestReward:
            bestReward = reward
            bestParams = parameters
            if reward >= 200:
                print(f"found in {i_episode} episodes")
                run_episode(env, bestParams, True)
                env.close()
                break

if __name__ == "__main__":
    env = gym.make("CartPole-v0")
    hill_climbing()
    random_search()
        