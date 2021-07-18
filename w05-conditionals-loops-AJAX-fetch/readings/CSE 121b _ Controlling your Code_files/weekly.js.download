
		

function fetchSource(){
	let source_dir = "example_source"
	const sourceFiles = [...document.querySelectorAll("code")].filter(aCodeBlock=>aCodeBlock.id != "").map(aCodeBlock=>aCodeBlock.id)
	const inPageBlocks = [...document.querySelectorAll("code")].filter(aCodeBlock=>aCodeBlock.id == "")

	Promise.all(sourceFiles.map(file => fetch(source_dir+"/"+file.replace('__','.')).then(res => res.text()).then(code => {
		let theCodeBlock = document.querySelector("#"+file)
		theCodeBlock.innerText = code
		theCodeBlock.className = codeType
		hljs.highlightBlock(theCodeBlock)
		})))
		.then(() => {
			console.log("done")
		})

	inPageBlocks.map(aBlock => {
		if (aBlock.className == null || aBlock.className == "") {
			aBlock.className = codeType
		}
		return hljs.highlightBlock(aBlock)
	})
}