.PHONY: install run build

install:
	@(cd .theme && npm i && npm ci)
run:
	@echo "(1) Development"
	@echo "(2) Local"
	@read -p "Please select 1-2: " app ; \
	case $$app in \
		1) (cd .theme && npm run -s dev && cd ..) ;; \
		2) (cd .theme && npm run -s local && cd ..) ;; \
		*) echo "Invalid option" ;; \
	esac
build:
	@echo "(1) Production"
	@echo "(2) Local"
	@read -p "Please select 1-2: " app ; \
	case $$app in \
		1) (cd .theme && npm run -s generate:production && cd ..) ;; \
		2) (cd .theme && npm run -s generate:local && cd ..) ;; \
		*) echo "Invalid option" ;; \
	esac
