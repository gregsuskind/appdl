function AppListController($scope) {
	$scope.apps = [
		{
			"name": "CodeKit",
			"tags": ['javascript', 'less', 'css'],
			"site": "http://incident57.com/codekit",
			"file": "http://incident57.com/codekit/files/codekit-8300.zip",
			"save": "codekit.zip"
		},
		{
			"name": "Dropbox",
			"tags": ['file', 'storage', 'sync'],
			"site": "https://www.dropbox.com",
			"file": "https://d1ilhw0800yew8.cloudfront.net/client/Dropbox%202.2.8.dmg",
			"save": "dropbox.dmg"
		},
		{
			"name": "Google Chrome",
			"tags": ['browser'],
			"site": "https://www.google.com/intl/en/chrome/browser/",
			"file": "https://dl.google.com/chrome/mac/stable/GGRO/googlechrome.dmg",
			"save": "googlechrome.dmg"
		},
		{
			"name": "Hiss",
			"tags": ['notifications', 'growl'],
			"site": "http://collect3.com.au/hiss/",
			"file": "http://collect3.com.au/hiss/Hiss.zip",
			"save": "hiss.zip"
		},
		{
			"name": "iTerm 2",
			"tags": ['terminal'],
			"site": "http://www.iterm2.com/#/section/home",
			"file": "http://iterm2.com/downloads/stable/iTerm2_v1_0_0.zip",
			"save": "iterm.zip"
		},
		{
			"name": "Firefox",
			"tags": ['browser'],
			"site": "http://www.mozilla.org/en-US/firefox/new/",
			"file": "https://download.mozilla.org/?product=firefox-22.0&os=osx&lang=en-US",
			"save": "firefox.dmg"
		},
		{
			"name": "Git",
			"tags": ['source control'],
			"site": "http://git-scm.com/",
			"file": "https://git-osx-installer.googlecode.com/files/git-1.8.3.2-intel-universal-snow-leopard.dmg",
			"save": "git.dmg"
		},
		{
			"name": "GitHub App",
			"tags": ['source control', 'gui'],
			"site": "",
			"file": "https://central.github.com/mac/latest",
			"save": "github.zip"
		},
		{
			"name": "MySQL Server",
			"tags": ['database', 'server'],
			"site": "http://www.mysql.com/",
			"file": "http://cdn.mysql.com/Downloads/MySQL-5.6/mysql-5.6.12-osx10.7-x86_64.dmg",
			"save": "mysql-server.dmg"
		},
		{
			"name": "Opera",
			"tags": ['browser'],
			"site": "http://www.opera.com/",
			"file": "http://get.geo.opera.com/pub/opera/desktop/15.0.1147.132/mac/Opera_15.0.1147.132_Setup.dmg",
			"save": "opera.dmg"
		},
		{
			"name": "Skype",
			"tags": ['chat'],
			"site": "http://www.skype.com/en/",
			"file": "http://download.skype.com/macosx/Skype_6.5.0.443.dmg",
			"save": "skype.dmg"
		},
		{
			"name": "Spotify",
			"tags": ['music'],
			"site": "https://www.spotify.com/us/",
			"file": "http://download.spotify.com/SpotifyInstaller.zip",
			"save": "spotify.zip"
		},
		{
			"name": "Sequel Pro",
			"tags": ['mysql'],
			"site": "http://www.sequelpro.com",
			"file": "https://sequel-pro.googlecode.com/files/sequel-pro-1.0.2.dmg",
			"save": "sequel-pro.dmg"
		},
		{
			"name": "Sublime Text 2",
			"tags": ['editor', 'code', 'IDE'],
			"site": "http://sublimetext.com",
			"file": "http://c758482.r82.cf2.rackcdn.com/Sublime%20Text%202.0.1.dmg",
			"save": "sublime-text-2.dmg"
		},
		{
			"name": "Transmit",
			"tags": ['ftp', 's3', 'webdav'],
			"site": "http://panic.com/transmit/",
			"file": "http://www.panic.com/transmit/d/Transmit%204.4.zip",
			"save": "transmit.zip"
		},
		{
			"name": "Vagrant",
			"tags": ['virtual machine', 'vm'],
			"site": "http://www.vagrantup.com/",
			"file": "http://files.vagrantup.com/packages/7e400d00a3c5a0fdf2809c8b5001a035415a607b/Vagrant-1.2.2.dmg",
			"save": "vagrant.dmg"
		},
		{
			"name": "VirtualBox",
			"tags": ['virtual machine', 'vm'],
			"site": "https://www.virtualbox.org/",
			"file": "http://download.virtualbox.org/virtualbox/4.2.14/VirtualBox-4.2.14-86644-OSX.dmg",
			"save": "virtualbox.dmg"
		},
		{
			"name": "Viscosity",
			"tags": ['vpn'],
			"site": "http://www.sparklabs.com/viscosity/",
			"file": "http://www.sparklabs.com/downloads/Viscosity.dmg",
			"save": "viscosity.dmg"
		}
	];
}
