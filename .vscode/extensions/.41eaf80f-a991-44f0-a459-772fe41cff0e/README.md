# Time Capsule

*Welcome to the future, and the past.*

**This extension interacts with Time Machine on MacOS** to give you the ability to see previous versions of files you are working on.

Great for:
* Source code you thought you lost
* Previous config file values
* Text data (JSON, SQL) changes
* Anything you can open!

<br>

![Screen Shot 2019-09-28 at 8 51 04 PM-1](https://user-images.githubusercontent.com/611996/65824645-07495780-e232-11e9-9eee-2bcc04fd8609.png)

## Installation

* Enable Time Machine in System Preferences.

* Select Full Disk Access in the Privacy tab of the Security & Privacy preference pane, and add Code to the list of applications which are allowed Full Disk Access.

![58cec9053286eb73163c980d5eb1975a _Screen+Shot+2019-09-28+at+1 22 46+AM](https://user-images.githubusercontent.com/611996/65812580-9f8e0080-e18e-11e9-9811-5cba02eabcb8.png)

## Usage

Activate the Time Capsule panel, by clicking its icon in the Activity Bar, or with the "Show Time Capsule" command in the Cmd-Shift-P palette.

When you open a file for editing, Time Capsule will check local APFS snapshots, along with any Time Machine backups on external storage. **You do not need an external drive connected to use the local snapshots feature.**

![Screen Shot 2019-09-28 at 6 42 14 PM-1](https://user-images.githubusercontent.com/611996/65823650-db24db00-e21f-11e9-928e-578e15e0a426.png)

Click one of the dates in the sidebar to see a read-only copy of the file from that date. You can also display a diff by clicking on the diff icon you'll see when hovering over a date.

Snapshots are created (and removed) automatically by the OS, but you can manually make a snapshot if you want, with the camera icon in the snapshot panel. Making a snapshot doesn't guarantee it will stay around forever, it will get cleaned up by the OS automatically following the normal Time Machine rules.

## Donate

If you've found this extension useful, please consider donating.

<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=john%40johnsolo.net&currency_code=USD&source=url" target="_blank">
<img src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" />
</a>