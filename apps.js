function AppListController($scope) {
	$scope.apps = [
		{
			"name": "1Password",
			"tags": ['password management'],
			"site": "https://agilebits.com/onepassword/mac",
			"file": "https://d13itkw33a7sus.cloudfront.net/dist/1P/mac/1Password-3.8.21.zip",
			"save": "1password.zip"
		},
		{
			"name": "Brackets",
			"tags": ['editor', 'IDE'],
			"site": "http://brackets.io/",
			"file": "http://download.brackets.io/file.cfm?platform=OSX&build=26",
			"save": "brackets.dmg"
		},
		{
			"name": "CocoaRestClient",
			"tags": ['HTTP', 'REST', 'API'],
			"site": "https://code.google.com/p/cocoa-rest-client/",
			"file": "https://code.google.com/p/cocoa-rest-client/downloads/detail?name=CocoaRestClient-1.3.6.dmg",
			"save": "cocoarestclient.dmg"
		},
		{
			"name": "CodeKit",
			"tags": ['javascript', 'less', 'css'],
			"site": "http://incident57.com/codekit",
			"file": "http://incident57.com/codekit/files/codekit-8300.zip",
			"save": "codekit.zip"
		},
		{
			"name": "Colloquy",
			"tags": ['chat', 'irc'],
			"site": "http://colloquy.info/",
			"file": "http://colloquy.info/downloads/colloquy-latest.zip",
			"save": "colloquy.zip"
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
			"site": "http://mac.github.com/",
			"file": "https://central.github.com/mac/latest",
			"save": "github.zip"
		},
		{
			"name": "LastPass",
			"tags": ['password management'],
			"site": "https://lastpass.com/",
			"file": "https://lastpass.com/download/cdn/lpmacosx.dmg",
			"save": "lastpass.dmg"
		},
		{
			"name": "MAMP",
			"tags": ['server', 'LAMP', 'apache', 'mysql', 'php'],
			"site": "http://www.mamp.info/en/index.html",
			"file": "http://www.mamp.info/downloads/releases/MAMP_PRO.zip",
			"save": "mamp.zip"
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
			"name": "Path Finder",
			"tags": ['file manager'],
			"site": "http://www.cocoatech.com/pathfinder/",
			"file": "http://get.cocoatech.com/PF6_LION.zip",
			"save": "pathfinder.zip"
		},
		{
			"name": "PhpStorm",
			"tags": ['IDE', 'editor'],
			"site": "http://www.jetbrains.com/phpstorm/",
			"file": "http://download-ln.jetbrains.com/webide/PhpStorm-6.0.3.dmg",
			"save": "phpstorm.dmg"
		},
		{
			"name": "Postgres.app",
			"tags": ['postgres', 'database', 'server'],
			"site": "http://postgresapp.com/",
			"file": "http://postgres-app.s3.amazonaws.com/PostgresApp-9-2-4-2.zip",
			"save": "postgreapp.zip"
		},
		{
			"name": "RSS.app",
			"tags": ['rss', 'aggregator', 'feed reader'],
			"site": "http://www.rssapplication.com/",
			"file": "http://www.rssapplication.com/RSS.zip",
			"save": "rss.zip"
		},
		{
			"name": "Sequel Pro",
			"tags": ['mysql'],
			"site": "http://www.sequelpro.com",
			"file": "https://sequel-pro.googlecode.com/files/sequel-pro-1.0.2.dmg",
			"save": "sequel-pro.dmg"
		},
		{
			"name": "Shimo",
			"tags": ['vpn'],
			"site": "http://www.chungwasoft.com/shimo/",
			"file": "http://www.chungwasoft.com/files/Shimo_latest.zip",
			"save": "shimo.zip"
		},
		{
			"name": "Skitch",
			"tags": ['annotation', 'sketch'],
			"site": "http://evernote.com/skitch/",
			"file": "http://cdn1.evernote.com/skitch/mac/release/Skitch-2.6.1.zip",
			"save": "skitch.zip"
		},
		{
			"name": "Skype",
			"tags": ['chat'],
			"site": "http://www.skype.com/en/",
			"file": "http://download.skype.com/macosx/Skype_6.5.0.443.dmg",
			"save": "skype.dmg"
		},
		{
			"name": "SourceTree",
			"tags": ['git', 'mercurial', 'source control', 'gui'],
			"site": "http://www.sourcetreeapp.com/",
			"file": "http://downloads.atlassian.com/software/sourcetree/SourceTree_1.6.2.1.dmg",
			"save": "sourcetree.dmg"
		},
		{
			"name": "Spotify",
			"tags": ['music'],
			"site": "https://www.spotify.com/us/",
			"file": "http://download.spotify.com/SpotifyInstaller.zip",
			"save": "spotify.zip"
		},
		{
			"name": "Sublime Text 2",
			"tags": ['editor', 'code', 'IDE'],
			"site": "http://sublimetext.com",
			"file": "http://c758482.r82.cf2.rackcdn.com/Sublime%20Text%202.0.1.dmg",
			"save": "sublime-text-2.dmg"
		},
		{
			"name": "Tower",
			"tags": ['git', 'gui', 'source control'],
			"site": "http://www.git-tower.com/",
			"file": "http://www.git-tower.com/download",
			"save": "tower.zip"
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
			"name": "Vim",
			"tags": ['vim', 'linux', 'OSS', 'cli', 'text', 'editor'],
			"site": "http://www.vim.org/",
			"file": "http://macvim.googlecode.com/files/MacVim-snapshot-68-Mountain-Lion.tbz",
			"save": "MacVim.tbz"
		},
		{
			"name": "vim-pathogen",
			"tags": ['vim', 'plugin', 'cli', 'text', 'editor'],
			"site": "http://github.com/tpope/vim-pathogen",
			"file": "http://www.vim.org/scripts/download_script.php?src_id=19375",
			"save": "pathogen.vim"
		},
		{
			"name": "The Ultimate vimrc",
			"tags": ['vim', 'plugins', 'cli', 'text', 'editor', 'pathogen'],
			"site": "http://github.com/amix/vimrc",
			"file": "http://github.com/amix/vimrc/archive/master.zip",
			"save": "the-ultimate-vimrc.zip"
		},
		{
			"name": "Versions",
			"tags": ['subversion', 'gui'],
			"site": "http://versionsapp.com/",
			"file": "http://cdn.versionsapp.com/updates/1.2.2_1047/Versions.zip",
			"save": "versions.zip"
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
