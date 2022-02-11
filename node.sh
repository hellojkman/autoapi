#!/bin/bash

if [ "$1" = "start" ]
then
	node=$(ps -ef | grep 'node app.js')
	first1=$(echo ${node} | cut -d " " -f2)
	first2=$(echo ${node} | cut -d " " -f8)
	if [ $first2 == "node" ]
	then
		for var in $first1
		do
 			if [ -n ${var} ]
			then
 				result=$(kill -9 ${var})
				echo "${var} process is killed."
				nohup node app.js > /dev/null 2>&1 & 
				echo "node is running."
				ps -ef | grep 'node'
			fi
 		done
	 else
 		nohup node app.js > /dev/null 2>&1 &
		echo "node is running."
		ps -ef | grep 'node'
 	fi
fi
if [ "$1" = "stop" ]
then

	node=$(ps -ef | grep 'node app.js')
	first1=$(echo ${node} | cut -d " " -f2)
	first2=$(echo ${node} | cut -d " " -f8)
	if [ $first2 == "node" ]
	then
		for var in $first1
		do
			if [ -n ${var} ]
			then
				result=$(kill -9 ${var})
				echo "${var} process is killed."
				ps -ef | grep 'node'
			fi
		done
	else
		echo running process not found.
	fi
fi
