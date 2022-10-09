---
toc: true
layout: post
categories: [Week 5]
title: Fixing Docker Problems
---

## My Problem

My problem was I could not open docker regularly giving me errors that I do not have permission for because I am not in the "docker-users" group. When I opened docker with administrator, it would open, but docker wouldn't connect to any wsl 2 Distros when I had them downloaded in my File Explorer.

## How I fixed My Problem

I discovered a command "netplwiz" in the windows key + r text box that can pull up your usernames along with the permissions. This will show you if you are a user, Administrator, or in any other groups and if you are not in the Docker-users group. I added myself to the group using the command
"net localgroup docker-users "username" /ADD" put me into the docker users group and after logging out and back in I could open docker regularly and see the WSL 2 Distros that I had.