.PHONY: install run build

install:
	@(cd .theme && npm i && npm ci)
run:
	@echo "(1) dev"
	@echo "(2) local"
	@read -p "Please select 1-2: " app ; \
	case $$app in \
		1) (cd .theme && npm run -s dev) ;; \
		2) (cd .theme && npm run -s local) ;; \
		*) echo "Invalid option" ;; \
	esac
build:
	@(cd .theme && npm run -s generate:local)
