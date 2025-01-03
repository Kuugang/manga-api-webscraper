// import Constructor from "./Constructor"

// const userAgents = [
// 	"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",
// 	"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36",
// 	"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36",
// 	"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36",
// 	"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36",
// ]

// function RotateUserAgentMixin<TBase extends Constructor>(Base?: TBase) {
// 	// Default base class if none is provided
// 	const baseClass =
// 		Base ||
// 		class {
// 			constructor() {
// 				// Default constructor for the case when no base class is provided
// 			}
// 		}

// 	return class RotateUserAgentMixin extends baseClass {
// 		protected requestHeaders: Record<string, string> = {}

// 		constructor(...args: any[]) {
// 			super(...args)
// 			console.log("Rotate User Agent Mixin Constructor")
// 		}

// 		protected getRequestHeaders(): Record<string, string> {
// 			const randomUserAgent =
// 				userAgents[Math.floor(Math.random() * userAgents.length)]
// 			console.log("Rotate User Agent: ", this.requestHeaders)
// 			return {
// 				...this.requestHeaders,
// 				"User-Agent": randomUserAgent,
// 			}
// 		}
// 	}
// }

// export default RotateUserAgentMixin

const userAgents = [
	"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",
	"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36",
	"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36",
	"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36",
	"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36",
]

class RotateUserAgentMixin {
	protected requestHeaders: Record<string, string> = {}

	constructor() {
		console.log("Rotate User Agent Mixin Constructor")
	}

	protected getRequestHeaders(): Record<string, string> {
		const randomUserAgent =
			userAgents[Math.floor(Math.random() * userAgents.length)]
		return {
			...this.requestHeaders,
			"User-Agent": randomUserAgent,
		}
	}
}

export default RotateUserAgentMixin
