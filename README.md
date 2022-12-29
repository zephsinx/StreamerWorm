# StreamerWorm

![GitHub repo size](https://img.shields.io/github/repo-size/zephsinx/StreamerWorm)
![GitHub contributors](https://img.shields.io/github/contributors/zephsinx/StreamerWorm)
![Twitch channel](https://img.shields.io/twitch/status/zephsinx?style=social)

Just a lil' worm guy popping up on your stream.

When added as a browser source to your streaming software of choice (e.g. OBS), a lil' worm will appear after a random amount of time on a corner of your screen. Why? Because it's fun!

### Table of Contents
- [Prerequisites](#prerequisites)
- [Installing](#installing)
- [How to use](#how-to-use)
- [Acknowledgements](#acknowledgments)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

> If you do not plan to run or make changes to StreamerWorm and simply want to use it for your stream, skip to the [How to use](#how-to-use) section below.

Before you begin, ensure you have met the following requirements:
- Download and install [Node.js](https://nodejs.org/en/download/) matching for your operating system.
   - The LTS (Long-term Support) version is recommended for most users.

### Installing

> If you do not plan to run or make changes to StreamerWorm and simply want to use it for your stream, skip to the [How to use](#how-to-use) section below.

> StreamerWorm is also available as an `npm` package by using `npm i @zephsinx/streamerworm`

1. Clone the repository: `git clone https://github.com/zephsinx/StreamerWorm.git`
2. Build the project: `npm install`
3. Run the project: `node index.js`

## Deployment

Instructions on deploying to a server coming soon.

StreamerWorm is also available as a Docker image on [Docker Hub](https://hub.docker.com/repository/docker/zephsinx/streamerworm).

To use, run the following command and replace `[PORT]` with the port you want the application to run on:

```shell
docker run -it -d -p [PORT]:3000 zephsinx/streamerworm:latest
```

For example, the following will make the application run on port `3123`.

```shell
docker run -it -d -p 3123:3000 zephsinx/streamerworm:latest
```

## How to Use

### Browser Source configuration

1. Add a new Browser Source to your broadcasting software (e.g. [OBS](https://obsproject.com/kb/browser-source)).
2. In the URL field, enter `https://streamerworm.zephsinx.com`.
   1. If running locally, use `http://localhost:3000`
3. Enjoy!

### Configuring Behavior

The default behavior of StreamerWorm can be modified by adding query parameters to the StreamerWorm URL. Hosted URL coming soon.

Example:
```
https://streamerworm.zephsinx.com?skipDelay=true&maxWidth=30&maxHeight=45
```

The displayed media can be overriden using the `mediaUrl` parameter. Keep in mind, while StreamerWorm attempts to calculate the media duration, you may need to manually specify the display time (in seconds) via the `mediaDuration` parameter.

For example:
```
https://streamerworm.zephsinx.com?mediaUrl=https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif&mediaDuration=2.75
```

#### Available Parameters

| Parameter       | Type    | Default             | Description                                                                                                                                                                   |
|-----------------|---------|---------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `skipDelay`     | `bool`  | `false`             | Whether to skip the delay between media plays                                                                                                                                 |
| `min`           | `float` | `30`                | The minimum amount time to wait between media plays in minutes                                                                                                                |
| `max`           | `float` | `90`                | The maximum amount of time to wait between media plays in minutes                                                                                                             |
| `maxHeight`     | `float` | `25`                | The maximum height of the media being displayed on screen. Value is a percentage of the total screen size                                                                     |
| `maxWidth`      | `float` | `25`                | The minimum height of the media being displayed on screen. Value is a percentage of the total screen size                                                                     |
| `mediaUrl`      | `float` | `default-media.gif` | Override URL of media to display. Used to provide a custom image or video to play                                                                                             |
| `mediaDuration` | `float` | None (calculated)   | Duration of media in seconds (decimals are accepted). StreamerWorm attempts to calculate the media duration, but in the case the calculation fails it should be provided here |

## Versioning

StreamerWorm uses [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

Please note that any release prior to 1.0.0 should be expected to contain breaking changes.

## Authors

* **zephsinx** - *Development* - [zephsinx](https://github.com/zephsinx)
* **Dudlik** - *Main idea & design consultation* - [ttv/Dudlik](https://twitch.tv/dudlik), [Dudlik](https://dudlik.co)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

* Credit for the idea for StreamerWorm goes to Mark Dudlik. Find his work at [dudlik.co](https://dudlik.co), or streaming on Twitch at [twitch.tv/dudlik](https://twitch.tv/dudlik) ![Twitch channel](https://img.shields.io/twitch/status/dudlik?style=social)
* Credit to the temporary worm GIF being used goes to Michelle Porucznik. See more of their work at https://porucz.com/