var Experigen =  {
	settings: {

		experimentName: "fahssresearcharbtest", // use only A-Z, a-z, 0-9
		
		databaseServer: "https://sdb.phonologist.org/experigen1/",
		recorderServer: "https://sdb.phonologist.org/audio/upload.php",

		online: true, // make sure you know what you're doing before changing this
		
		strings: {
			windowTitle:     "SBU ARB FAHSS",
			connecting:		 "Connecting...",
			loading:         "Loading...",
			soundButton:     "    ►    ",
			continueButton:  "   continue   ",
			errorMessage:    "An error occurred. We apologize for the inconvenience.",
			emptyBoxMessage: "Please supply your answer in the text box.",
			
			recordButton : "Record",
			stopButton : "Stop",
			sentButton : "Save",
			tryagainButton: "Delete",
			uploadSuccessful : "Saved! ✔︎",
			uploading : "Saving...",
			recording : "Recording...",
			processing: "Processing..."
		},
		
		audio: true,
		
		progressbar: {
			visible: true, 
			adjustWidth: 6,
			percentage: false
		},
		
		items: "resources/items.txt",
		
		otherresources: {
			frames: "resources/myframes.txt",
			pictures: "resources/pictures.txt"	
		},

		folders: {
			sounds: "resources/sounds/",
		},
	
		footer: "views/footer.html",
		missingview: "views/missingview.ejs"
	}	
};




