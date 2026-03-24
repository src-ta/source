.PHONY: all install build dev preview lint resume clean help

all: install build ## Install deps + build

install: ## Install dependencies
	npm install

build: ## Build for production (tsc -b && vite build)
	npm run build

dev: ## Start Vite dev server
	npm run dev

preview: ## Preview production build
	npm run preview

lint: ## Run ESLint
	npm run lint

resume: ## Generate resume PDF via Puppeteer
	node scripts/generate-resume-pdf.mjs

clean: ## Remove build artifacts
	rm -rf node_modules dist

help: ## Show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'
