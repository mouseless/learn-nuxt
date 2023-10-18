.PHONY: run build

run:
	@ \
	echo "(1) Dev" ; \
	echo "(2) Local" ; \
	echo "(3) Eslint" ; \
	echo "(4) Eslint Fix" ; \
	echo "" ; \
	echo "Please select 1-4: " ; \
	read srv ; \
	if test $$srv -eq "1" ; then \
		cd .theme ; npm run dev ; cd .. ; \
	fi ; \
	if test $$srv -eq "2" ; then \
		cd .theme ; npm run local ; cd .. ; \
	fi ; \
	if test $$srv -eq "3" ; then \
		cd .theme ; npm run lint ; cd .. ; \
	fi ; \
	if test $$srv -eq "4" ; then \
		cd .theme ; npx eslint . --fix ; cd .. ; \
	fi
build:
	@ \
	echo "(1) Production" ; \
	echo "(2) Local" ; \
	echo "" ; \
	echo "Please select 1-2: " ; \
	read srv ; \
	if test $$srv -eq "1" ; then \
		cd .theme ; npm run generate:production ; cd .. ; \
	fi ; \
	if test $$srv -eq "2" ; then \
		cd .theme ; npm run generate:local ; cd .. ; \
	fi
