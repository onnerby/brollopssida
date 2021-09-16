<template>
	<div class="doe-center-section">
		<h1>Om oss</h1>
		<h2>A Perfect Match since 2013</h2>
		<p>
			<b>Varför #vårhashtag</b><br>
			Lång historia....
		</p>
		<div class="doe-imglist">
			<img v-for="n in 18" :src="'images/gallery/' + n + '.jpg'">
		</div>
	</div>
</template>
