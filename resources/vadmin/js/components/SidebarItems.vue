<template>
	<div>

		<!-- Main Node  -->
		<div v-on:click="expandItem" v-if="item.name != 'root'">
			
			<!-- Parent -->
			<div v-if="hasChildren" class="sidebar-item" :class="expanded ? 'sidebar-item-opened' : ''"> 
				<a href="#" :style="{ 'padding-left': `${depth * 15}px` }">

					<!-- <span class="bicon" v-html="setIcon(item.bicon)"></span> -->
					<span class="bicon"><img :src="setIcon(item.bicon)"></span>

					{{ item.name }}

					<div class="sidebar-right-icons">
						<img class="sidebar-openclose-icon" :src="expanded ? '/vendor/bootstrap-icons/x.svg' : '/vendor/bootstrap-icons/plus.svg'">
					</div>

				</a>
			</div>
		
			<!-- Child -->
			<div v-else class="sidebar-item">
				
				
				<!-- Normal Link -->
				<a href="test" v-if="item.noRouter">
					<span class="bicon"><img :src="setIcon(item.bicon)"></span>
					
					{{ item.name }} 

				</a>

				<!-- Router Link -->
				<router-link :style="{ 'padding-left': `${depth * 15}px` }" :to="{ name: item.route }" v-else> 

					<span class="bicon"><img :src="setIcon(item.bicon)"></span>
					
					{{ item.name }} 
					
				</router-link>

			</div>
		
		</div>
		
		<!-- Calling the same component -->
		<transition-group name="slide">
			<SidebarItems
				v-if="expanded" 
				v-for="child in item.children" 
				:key="child.name"
				:item="child"
				:depth="depth + 1"
			/>
		</transition-group>

	</div>
</template>

<script>
	// https://www.youtube.com/watch?v=VdSf6SFPiFg
	import CommonMixins from "../mixins/CommonMixin"

	export default {
		name: 'SidebarItems',
		mixins: [ CommonMixins ],
		props: {
			item: Object,   
			depth: { 
				type: Number,
				default: 0
			}
		},
		data () {
			return {
				expanded: false
			}
		},
		created() {
			if(this.item.name == 'root')
				this.expanded = true;

			this.expandIfHasActiveChild();
		},
		computed: {
			hasChildren() {
				return this.item.children;
			}			
		},
		methods: {
			expandIfHasActiveChild() {

				if(this.item.children != undefined){
					this.item.children.forEach(element => {
						if(element.route == this.$router.currentRoute.name)
							this.expanded = true;
					});
				}

			},	
						
			expandItem() {
				this.expanded = !this.expanded;
			},

			setIcon(iconName, src = "/vendor/bootstrap-icons/", extension = ".svg", defaultIcon = "dot") {

				if(iconName != undefined && iconName != '')
					return src + iconName + extension;
				else 
					return  src + defaultIcon + extension;

			}
		},
	}
</script>


<style>


	.slide-enter-active {
		-moz-transition-duration: 0.3s;
		-webkit-transition-duration: 0.3s;
		-o-transition-duration: 0.3s;
		transition-duration: 0.3s;
		-moz-transition-timing-function: ease-in;
		-webkit-transition-timing-function: ease-in;
		-o-transition-timing-function: ease-in;
		transition-timing-function: ease-in;
	}

	.slide-leave-active {
		-moz-transition-duration: 0.3s;
		-webkit-transition-duration: 0.3s;
		-o-transition-duration: 0.3s;
		transition-duration: 0.3s;
		-moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
		-webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
		-o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
		transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
	}

	.slide-enter-to, .slide-leave {
		max-height: 100px;
		overflow: hidden;
	}

	.slide-enter, .slide-leave-to {
		overflow: hidden;
		max-height: 0;
	}

</style>