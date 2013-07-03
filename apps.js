function AppListController($scope) {
	$scope.apps = [
		{
			"name": "CodeKit",
			"site": "http://incident57.com/codekit",
			"file": "http://incident57.com/codekit/files/codekit-8300.zip",
			"tags": ['javascript', 'less', 'css']
		},
		{
			"name": "Dropbox",
			"site": "https://www.dropbox.com",
			"file": "https://www.dropbox.com/downloading?os=mac",
			"tags": ['file', 'storage', 'sync']
		},
		{
			"name": "Google Chrome",
			"site": "https://www.google.com/intl/en/chrome/browser/",
			"file": "https://dl.google.com/chrome/mac/stable/GGRO/googlechrome.dmg",
			"tags": ['browser']
		},
		{
			"name": "Hiss",
			"site": "http://collect3.com.au/hiss/",
			"file": "http://collect3.com.au/hiss/Hiss.zip",
			"tags": ['notifications', 'growl']
		}
		{
			"name": "iTerm 2",
			"site": "http://www.iterm2.com/#/section/home",
			"file": "http://iterm2.com/downloads/stable/iTerm2_v1_0_0.zip",
			"tags": ['terminal']
		},
		{
			"name": "Firefox",
			"site": "http://www.mozilla.org/en-US/firefox/new/",
			"file": "https://download.mozilla.org/?product=firefox-22.0&os=osx&lang=en-US",
			"tags": ['browser']
		},
		{
			"name": "Git",
			"site": "http://git-scm.com/",
			"file": "https://git-osx-installer.googlecode.com/files/git-1.8.3.2-intel-universal-snow-leopard.dmg",
			"tags": ['source control']
		},
		{
			"name": "MySQL Server",
			"site": "http://www.mysql.com/",
			"file": "http://cdn.mysql.com/Downloads/MySQL-5.6/mysql-5.6.12-osx10.7-x86_64.dmg",
			"tags": ['database', 'server']
		},
		{
			"name": "Opera",
			"site": "http://www.opera.com/",
			"file": "http://www.opera.com/download/get/?partner=www&opsys=MacOS",
			"tags": ['browser']
		},
		{
			"name": "Skype",
			"site": "http://www.skype.com/en/",
			"file": "http://download.skype.com/macosx/Skype_6.5.0.443.dmg",
			"tags": ['chat']
		},
		{
			"name": "Spotify",
			"site": "https://www.spotify.com/us/",
			"file": "http://download.spotify.com/SpotifyInstaller.zip",
			"tags": ['music']
		},
		{
			"name": "Sequel Pro",
			"site": "http://www.sequelpro.com",
			"file": "https://sequel-pro.googlecode.com/files/sequel-pro-1.0.2.dmg",
			"tags": ['mysql']
		},
		{
			"name": "Sublime Text 2",
			"site": "http://sublimetext.com",
			"file": "http://c758482.r82.cf2.rackcdn.com/Sublime%20Text%202.0.1.dmg",
			"tags": ['editor', 'code', 'IDE']
		},
		{
			"name": "Transmit",
			"site": "http://panic.com/transmit/",
			"file": "http://www.panic.com/transmit/d/Transmit%204.4.zip",
			"tags": ['ftp', 's3', 'webdav']
		},
		{
			"name": "Viscosity",
			"site": "http://www.sparklabs.com/viscosity/",
			"file": "http://www.sparklabs.com/downloads/Viscosity.dmg",
			"tags": ['vpn']
		}
	];
}
