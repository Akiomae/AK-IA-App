<script setup lang="ts">

//--------------------------------------\\
//-------------- IMPORTS ---------------\\
//--------------------------------------\\



//--------------------------------------\\
//-------------- VARIABLES -------------\\
//--------------------------------------\\



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


</script>

<template>
    <div class="loader">
		<!-- No se ve xdd, debo arreglarlo.
		ATTE: HTXZK
		-->
		<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
			<defs>
				<linearGradient id="g" x1="0%" y1="100%" x2="0%" y2="0%"> <stop offset="50%" stop-color="#1FA2FF" />
					<stop offset="50%" stop-color="#FFD630" />
				</linearGradient>
			</defs>
			<path class="one-path a-g" d="M 38 25 L 14 50 L 38 75" stroke="#41D375" pathLength="120" />
			<path class="one-path a-p" d="M 62 75 L 86 50 L 62 25" stroke="#FF8DA1"
			pathLength="120" />
			<path class="one-path a-s" d="M 33 88 L 67 12" stroke="url(#g)" pathLength="120" />
		</svg>
	</div>
</template>

<style>

#app {
	height: 100%;
}

.one-path{
	fill: none; 
	stroke-width: 13; 
	stroke-linecap: round; 
	stroke-linejoin: round; 
	stroke-dasharray: 120; 
	stroke-dashoffset: 120;
}
@keyframes dFlow { 
	0%{ 
		stroke-dashoffset: 120; 
	} 
	35%, 65% { 
		stroke-dashoffset: 0;
	} 
	100%{ 
		stroke-dashoffset: -120;
	} 
}
.a-g {
	animation: dFlow 3.55 cubic-bezier (0.65, 0, 0.35, 1) infinite; 
}
.a-p {
	animation: dFlow 3.5s cubic-bezier (0.65, 0, 0.35, 1) infinite; animation-delay: 0.35;
}
.a-s{ 
	animation: dFlow 3.55 cubic-bezier (0.65, 0, 0.35, 1) infinite; animation-delay: 0.15s;
}

</style>