<template>
	<div class="container-fluid">
		<div class="row">
			<div class="col">
				<h1>Íconos</h1>
			</div>
		</div>
		<div class="row">
			<div class="col">
				<div class="icon-demo-container">
					<div class="icon-demo" v-for="(icon, index) in icons" :key="index">
						<img :src="setIcon(icon)"> <br>
						{{ icon.toLowerCase() }}
					</div>
					<br><br>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				icons: [
					"Alarm-fill","Alarm","Alt","App-indicator","App","Archive-fill","Archive","Arrow-90deg-down","Arrow-90deg-left","Arrow-90deg-right","Arrow-90deg-up","Arrow-bar-down","Arrow-bar-left","Arrow-bar-right","Arrow-bar-up","Arrow-clockwise","Arrow-counterclockwise","Arrow-down-left","Arrow-down-right","Arrow-down-short","Arrow-down","Arrow-left-right","Arrow-left-short","Arrow-left","Arrow-repeat","Arrow-return-left","Arrow-return-right","Arrow-right-short","Arrow-right","Arrow-up-down","Arrow-up-left","Arrow-up-right","Arrow-up-short","Arrow-up","Arrows-angle-contract","Arrows-angle-expand","Arrows-collapse","Arrows-expand","Arrows-fullscreen","Arrows-move","Aspect-ratio-fill","Aspect-ratio","At","Award-fill","Award","Backspace-fill","Backspace-reverse-fill","Backspace-reverse","Backspace","Bag-fill","Bag","Bar-chart-fill","Bar-chart","Battery-charging","Battery-full","Battery-half","Battery","Bell-fill","Bell","Blockquote-left","Blockquote-right","Book-half","Book","Bookmark-check","Bookmark-dash","Bookmark-fill","Bookmark-plus","Bookmark","Bookmarks-fill","Bookmarks","Bootstrap-fill","Bootstrap-reboot","Bootstrap","Bounding-box-circles","Bounding-box","Box-arrow-down-left","Box-arrow-down-right","Box-arrow-down","Box-arrow-in-down-left","Box-arrow-in-down-right","Box-arrow-in-down","Box-arrow-in-left","Box-arrow-in-right","Box-arrow-in-up-left","Box-arrow-in-up-right","Box-arrow-in-up","Box-arrow-left","Box-arrow-right","Box-arrow-up-left","Box-arrow-up-right","Box-arrow-up","Braces","Briefcase-fill","Briefcase","Brightness-alt-high-fill","Brightness-alt-high","Brightness-alt-low-fill","Brightness-alt-low","Brightness-high-fill","Brightness-high","Brightness-low-fill","Brightness-low","Brush","Bucket-fill","Bucket","Building","Bullseye","Calendar-fill","Calendar","Camera-video-fill","Camera-video","Camera","Capslock-fill","Capslock","Card-checklist","Card-heading","Card-image","Card-list","Card-text","Caret-down-fill","Caret-down","Caret-left-fill","Caret-left","Caret-right-fill","Caret-right","Caret-up-fill","Caret-up","Chat-dots-fill","Chat-dots","Chat-fill","Chat-quote-fill","Chat-quote","Chat-square-dots-fill","Chat-square-dots","Chat-square-fill","Chat-square-quote-fill","Chat-square-quote","Chat-square","Chat","Check-all","Check-box","Check-circle","Check","Chevron-bar-contract","Chevron-bar-down","Chevron-bar-expand","Chevron-bar-left","Chevron-bar-right","Chevron-bar-up","Chevron-compact-down","Chevron-compact-left","Chevron-compact-right","Chevron-compact-up","Chevron-contract","Chevron-double-down","Chevron-double-left","Chevron-double-right","Chevron-double-up","Chevron-down","Chevron-expand","Chevron-left","Chevron-right","Chevron-up","Circle-fill","Circle-half","Circle-square","Circle","Clipboard-data","Clipboard","Clock-fill","Clock-history","Clock","Cloud-download","Cloud-fill","Cloud-upload","Cloud","Code-slash","Code","Collection-fill","Collection-play-fill","Collection-play","Collection","Columns-gap","Columns","Command","Compass","Cone-striped","Cone","Controller","Credit-card","Crop","Cursor-fill","Cursor-text","Cursor","Dash-circle-fill","Dash-circle","Dash-square-fill","Dash-square","Dash","Diamond-fill","Diamond-half","Diamond","Display-fill","Display","Dot","Download","Droplet-fill","Droplet-half","Droplet","Egg-fill","Egg-fried","Egg","Eject-fill","Eject","Envelope-fill","Envelope-open-fill","Envelope-open","Envelope","Exclamation-circle-fill","Exclamation-circle","Exclamation-diamond-fill","Exclamation-diamond","Exclamation-octagon-fill","Exclamation-octagon","Exclamation-square-fill","Exclamation-square","Exclamation-triangle-fill","Exclamation-triangle","Exclamation","Exclude","Eye-fill","Eye-slash-fill","Eye-slash","Eye","File-arrow-down","File-arrow-up","File-break","File-check","File-code","File-diff","File-earmark-arrow-down","File-earmark-arrow-up","File-earmark-break","File-earmark-check","File-earmark-code","File-earmark-diff","File-earmark-minus","File-earmark-plus","File-earmark-ruled","File-earmark-spreadsheet","File-earmark-text","File-earmark-zip","File-earmark","File-minus","File-plus","File-post","File-richtext","File-ruled","File-spreadsheet","File-text","File-zip","File","Files-alt","Files","Film","Filter-left","Filter-right","Filter","Flag-fill","Flag","Folder-check","Folder-fill","Folder-minus","Folder-plus","Folder-symlink-fill","Folder-symlink","Folder","Fonts","Forward-fill","Forward","Fullscreen-exit","Fullscreen","Funnel-fill","Funnel","Gear-fill","Gear-wide-connected","Gear-wide","Gear","Gem","Geo-alt","Geo","Gift-fill","Gift","Graph-down","Graph-up","Grid-1x2-fill","Grid-1x2","Grid-3x2-gap-fill","Grid-3x2-gap","Grid-3x2","Grid-3x3-gap-fill","Grid-3x3-gap","Grid-3x3","Grid-fill","Grid","Hammer","Hash","Heart-fill","Heart-half","Heart","House-door-fill","House-door","House-fill","House","Hr","Image-alt","Image-fill","Image","Images","Inbox-fill","Inbox","Inboxes-fill","Inboxes","Info-circle-fill","Info-circle","Info-square-fill","Info-square","Info","Intersect","Justify-left","Justify-right","Justify","Kanban-fill","Kanban","Laptop","Layers-fill","Layers-half","Layers","Layout-sidebar-inset-reverse","Layout-sidebar-inset","Layout-sidebar-reverse","Layout-sidebar","Layout-split","Layout-text-sidebar-reverse","Layout-text-sidebar","Layout-text-window-reverse","Layout-text-window","Layout-three-columns","Layout-wtf","Life-preserver","Lightning-fill","Lightning","Link-45deg","Link","List-check","List-nested","List-ol","List-task","List-ul","List","Lock-fill","Lock","Map","Mic-fill","Mic-mute-fill","Mic-mute","Mic","Moon","Music-note-beamed","Music-note-list","Music-note","Music-player-fill","Music-player","Newspaper","Octagon-fill","Octagon-half","Octagon","Option","Outlet","Paperclip","Pause-fill","Pause","Pen","Pencil-square","Pencil","Pentagon-fill","Pentagon-half","Pentagon","People-circle","People-fill","People","Person-bounding-box","Person-check-fill","Person-check","Person-dash-fill","Person-dash","Person-fill","Person-lines-fill","Person-plus-fill","Person-plus","Person-square","Person","Phone-landscape","Phone","Pie-chart-fill","Pie-chart","Pip-fill","Pip","Play-fill","Play","Plug","Plus-circle-fill","Plus-circle","Plus-square-fill","Plus-square","Plus","Power","Puzzle-fill","Puzzle","Question-circle-fill","Question-circle","Question-diamond-fill","Question-diamond","Question-octagon-fill","Question-octagon","Question-square-fill","Question-square","Question","Reply-all-fill","Reply-all","Reply-fill","Reply","Screwdriver","Search","Server","Shield-fill","Shield-lock-fill","Shield-lock","Shield-shaded","Shield","Shift-fill","Shift","Shuffle","Skip-backward-fill","Skip-backward","Skip-end-fill","Skip-end","Skip-forward-fill","Skip-forward","Skip-start-fill","Skip-start","Slash-circle-fill","Slash-circle","Slash-square-fill","Slash-square","Slash","Sliders","Soundwave","Speaker","Square-fill","Square-half","Square","Star-fill","Star-half","Star","Stop-fill","Stop","Stopwatch-fill","Stopwatch","Subtract","Sun","Table","Tablet-landscape","Tablet","Tag-fill","Tag","Terminal-fill","Terminal","Text-center","Text-indent-left","Text-indent-right","Text-left","Text-right","Textarea-t","Textarea","Three-dots-vertical","Three-dots","Toggle-off","Toggle-on","Toggles","Tools","Trash-fill","Trash","Trash2-fill","Trash2","Triangle-fill","Triangle-half","Triangle","Trophy","Tv-fill","Tv","Type-bold","Type-h1","Type-h2","Type-h3","Type-italic","Type-strikethrough","Type-underline","Type","Union","Unlock-fill","Unlock","Upload","View-list","View-stacked","Volume-down-fill","Volume-down","Volume-mute-fill","Volume-mute","Volume-up-fill","Volume-up","Vr","Wallet","Watch","Wifi","Window","Wrench","X-circle-fill","X-circle","X-diamond-fill","X-diamond","X-octagon-fill","X-octagon","X-square-fill","X-square","X"
				]
			}	
		},
		methods: {
			setIcon(iconName, src = "/vendor/bootstrap-icons/", extension = ".svg", defaultIcon = "dot") {

				if(iconName != undefined && iconName != '')
					return src + iconName.toLowerCase() + extension;
				else 
					return  src + "BROKEN" + extension;

			}
		}
	}
</script>


