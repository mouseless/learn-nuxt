.PHONY: run build

run:
	@ \
	echo "(1) Dev" ; \
	echo "(2) Local" ; \
	echo "" ; \
	echo "Please select 1-4: " ; \
	read srv ; \
	if test $$srv -eq "1" ; then \
		cd .theme ; npm run -s dev ; cd .. ; \
	fi ; \
	if test $$srv -eq "2" ; then \
		cd .theme ; npm run -s local ; cd .. ; \
	fi
build:
	@ \
	echo "(1) Production" ; \
	echo "(2) Local" ; \
	echo "" ; \
	echo "Please select 1-2: " ; \
	read srv ; \
	if test $$srv -eq "1" ; then \
		cd .theme ; npm run -s generate:production ; cd .. ; \
	fi ; \
	if test $$srv -eq "2" ; then \
		cd .theme ; npm run -s generate:local ; cd .. ; \
	fi
