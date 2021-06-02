#!/usr/bin/env bash

base_dir=$(dirname "$(readlink -f "$0")")

if [ -d "$HOME/Library/Application Support/Übersicht/widgets/pecan" ]
then
	cp -ri ${base_dir}/* "$HOME/Library/Application Support/Übersicht/widgets/pecan"
else
	echo 'Übersicht/pecan are not installed. Exiting.'
fi

