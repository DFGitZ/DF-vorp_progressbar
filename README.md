# DF-vorp_progressbar
vorp_progressbar rework

# VORP ProgressBar
> A Client side UI progressbar for vorp resources

## How to install
* Download this repo
* Copy and paste `vorp_progressbar` folder to `resources/vorp_progressbar`
* Add `ensure <YOUR_RESOURCE_NAME>` to your `server.cfg` file
* Now you are ready to get coding!

## How can I use this within my script?

### Initiate the progress bar globally (Client side)
 ```lua
    progressbar = exports.vorp_progressbar:initiate()
 ```
 
### Start your progress UI

#### Start Inputs
| Input | Info |
|--|--|
| message | What you want the progress to display |
| time | how long the progress should display (in milliseconds) |
| callback | function that will get called when the progress is done |
| theme | What you want the progress bar/circle to look like |
| color | What color (hex or rgb) do you want the progress loader to be. Defaults to a dark red. |
| width | What width you want the linear progressbar to be. Default: 20vw |

##### Theme Options
| Option | Info |
|--|--|
| linear | Shows a linear progress flat bar |
| circle | Shows a circle progress bar |
| innercircle | Shows a circle progress bar with a seconds countdown in the middle |

_**Examples:**_
 ```lua
        progressbar.start('Loading...', 20000, function ()
            print('DONE!!!!')
        end, 'linear', '#ff0000', '20vw')
 ```

 ```lua
        progressbar.start('Loading...', 20000, function ()
            print('DONE!!!!')
        end)
 ```

## Screenshots
![image](https://github.com/user-attachments/assets/8aa46ad5-1e4e-42be-b8b4-e8ed423762c2)
![image](https://github.com/user-attachments/assets/8f57951b-0a70-49ed-9705-6782341ad2f3)


## Need More Support? 
- [Vorp Disord](https://discord.gg/DHGVAbCj7N)

## Requirements
- [VORP-Core](https://github.com/VORPCORE/VORP-Core/releases)

