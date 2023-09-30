var file_name ="workspace.xml"
Promise.all(
	[file_name, "toolbox.xml"].map(async file => {
		return fetch(file).then(
			(res) => {
				return res.text();
			}
		);
	})
).then((xmls) => {
	xmls.forEach((xml) => {
		var parser = new DOMParser();
		var doc = parser.parseFromString(xml, "application/xml");
		document.body.appendChild(doc.documentElement);
	});
}).then(() => {

	/* TODO: Change toolbox XML ID if necessary. Can export toolbox XML from Workspace Factory. */
	var toolbox = document.getElementById("toolbox");

	var options = {
		toolbox: toolbox,
		collapse: true,
		comments: true,
		disable: true,
		maxBlocks: Infinity,
		trashcan: true,
		horizontalLayout: false,
		toolboxPosition: 'start',
		css: true,
		media: 'https://blockly-demo.appspot.com/static/media/',
		rtl: false,
		scrollbars: true,
		sounds: true,
		oneBasedIndex: true,
		grid: {
			spacing: 20,
			length: 1,
			colour: '#888',
			snap: false
		},
		zoom: {
			controls: true,
			wheel: true,
			startScale: 1,
			maxScale: 3,
			minScale: 0.3,
			scaleSpeed: 1.2
		}
	};

	/* Inject your workspace */
	var workspace = Blockly.inject('blocklyDiv', options);

	/* Load Workspace Blocks from XML to workspace. Remove all code below if no blocks to load */

	/* TODO: Change workspace blocks XML ID if necessary. Can export workspace blocks XML from Workspace Factory. */
	var workspaceBlocks = document.getElementById("workspaceBlocks");

	/* Load blocks to workspace. */
	Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);
	function showCode() {
		Blockly.Python.INFINITE_LOOP_TRAP = null;
		const pre = document.getElementById('python');
		pre.innerHTML = Blockly.Python.workspaceToCode(workspace);
		hljs.highlightBlock(pre);
	}
	document.getElementById('showCode').addEventListener('click', showCode, false);
/*
	function execCode() {
		Blockly.Python.INFINITE_LOOP_TRAP = null;
		try {
			eval(Blockly.Python.workspaceToCode(workspace));
		} catch (e) {
			alert(e);
		}
	}
	document.getElementById('execCode').addEventListener('click', execCode, false);
*/
	fileOut()
	function fileOut(){
		const download = document.querySelector('#download')
		download.addEventListener('click',(event)=>{
			event.preventDefault()
			const text = Blockly.Python.workspaceToCode(workspace)
			const blob = new Blob([text],{type: 'text/plain'})
			const url = URL.createObjectURL(blob)
			const anchor = document.createElement('a')
			anchor.setAttribute('href', url)
			anchor.setAttribute('download','sample.py')
			const mouseEvent = new MouseEvent('click',{
				bubbles: true,
				cancelable: true,
				view: window,
			})
			anchor.dispatchEvent(mouseEvent)
		})
	}

	save()
	function save(){
		const save = document.querySelector('#save')
		save.addEventListener('click',(event)=>{
			event.preventDefault()
			var xml = Blockly.Xml.workspaceToDom(workspace)//ファイル化したいところをxml形式で取り出す
			var text = Blockly.Xml.domToText(xml)//取り出したxmlをテキスト化
			var arr = Array.from(text)//テキストを配列化
			arr.splice(54,0,' id ="workspaceBlocks"')//配列に足りない文字を追加
			const blob = new Blob(arr,{type:'application/xml'})
			const url = URL.createObjectURL(blob)
			const anchor = document.createElement('a')
			anchor.setAttribute('href', url)
			anchor.setAttribute('download','block.xml')
			const mouseEvent = new MouseEvent('click',{
				bubbles: true,
				cancelable: true,
				view: window,
			})
			anchor.dispatchEvent(mouseEvent)
		})
	}

	function copy(){
		const text = Blockly.Python.workspaceToCode(workspace)
		navigator.clipboard.writeText(text)
		alert('コピーしました。')
	}
	document.getElementById('copy').addEventListener('click',copy,false);
	open()
	function open(){
		let input = document.getElementById('file');
		let reader = new FileReader();
		input.addEventListener('change',() =>{
			for(file of input.files){
				reader.readAsText(file,'UTF-8');
				reader.onload = () => {
					var xml = Blockly.Xml.textToDom(reader.result);
					workspace.clear();
					Blockly.Xml.domToWorkspace(xml, workspace);
				}
			}
		})
	}
	
});

