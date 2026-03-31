<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Loader from './Loader.vue';

//--------------------------------------\\
//-------------- IMPORTS ---------------\\
//--------------------------------------\\



//--------------------------------------\\
//-------------- VARIABLES -------------\\
//--------------------------------------\\

let isLoaded = ref(false);
let preloadURL = ref("");

//---------- CONTANTS ----------\\



//--------------------------------------\\
//---------- PRIVATE FUNCTIONS ---------\\
//--------------------------------------\\



//--------------------------------------\\
//---------- PUBLIC FUNCTIONS ----------\\
//--------------------------------------\\



//--------------------------------------\\
//--------------- MAIN -----------------\\
//--------------------------------------\\

onMounted(async () => {
	console.log("mounted");
	let preloadFile = await window.electron.invoke("Window:Show");
	console.log(preloadFile);
	preloadURL.value = preloadFile;

	let webview = document.getElementById("webview") as HTMLElement;
	webview.addEventListener("dom-ready", () => {
		isLoaded.value = true;
		let shadowRoot = document.querySelector("#webview")?.shadowRoot;

		if (!shadowRoot) {
			console.log("shadowRoot not found");
			return;
		}

		let iframe = shadowRoot.querySelector("iframe");

		if (!iframe) {
			console.log("iframe not found");
			return;
		}

		iframe.style.height = "100%";
	});
});
</script>

<template>
	<Loader :style="{ display: isLoaded ? 'none' : 'block' }" />
    <webview :style="{  display: isLoaded ? 'flex' : 'none' }" 
		id="webview" 
		src="https://akiomae.xyz/AK-IA/"
		:preload="preloadURL"
	>
	</webview>
</template>

<style>

#app {
	height: 100%;
}

#webview {
	height: 100%;
}

</style>