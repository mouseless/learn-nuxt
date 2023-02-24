.PHONY: run build prebuild

run:
	cd .theme ; npm run dev
build:
	cd .theme ; npm run generate
prebuild:
	cd .theme ; node prebuild
