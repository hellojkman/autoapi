#!/bin/bash

node=$(ps -ef | grep 'node app.js')

first1=$(echo ${node} | cut -d " " -f2)
first2=$(echo ${node} | cut -d " " -f8)
echo $first2
if [ $first2 == "node" ]
then
	for var in $first1
	do
		echo $var
		if [ -n ${var} ]
		then
			result=$(kill -9 ${var})
			echo "${var} process is killed."
		fi
	done
else
	echo running process not found.
fi
