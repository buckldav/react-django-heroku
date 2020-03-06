import React from 'react';
import Iframe from 'react-iframe';
import { Menu, Dropdown, Icon } from 'antd';

const TextGamesInfo = [
    {
        title: "A Guard's Life",
        author: "Orly M",
        engine: "repl.it",
        instructions: "A medieval text adventure. Press Enter to begin.",
        url: "https://medieval-text-game.skylawolfy.repl.run/"
    },
    {
        title: "Back in Time",
        author: "Dylan P",
        engine: "repl.it",
        instructions: "Choose your own adventure game. Type in your choices exactly.",
        url: "https://repl.it/@dylanperaza961/Back-In-Time?lite=true&outputonly=1"
    },
    {
        title: "Defy the Odds",
        author: "Tennyson H",
        engine: "repl.it",
        instructions: "Good luck",
        url: "https://chooz-ur-own-advenchure-gaym.tennysonhirst.repl.run/"
    },
    {
        title: "Dragon's Quest",
        author: "Talon M",
        engine: "repl.it",
        instructions: "Choose your own adventure game. Type in your choices exactly.",
        url: "https://repl.it/@TMaurin/School-Project?lite=true&outputonly=1"
    },
    {
        title: "Kingdom",
        author: "Ammon A",
        engine: "repl.it",
        instructions: "The fate of the kingdom is in your hands!",
        url: "https://kingdom.ammonasay.repl.run/"
    },
]

const GameInfo = [  
    {
        title: "Aneurysm",
        author: "Tennyson H",
        engine: "Godot",
        instructions: "Click on the game to activate it. Press arrow keys to move.",
        url: "https://meritacademy-games.s3-us-west-1.amazonaws.com/aneurysm/Tennyson.html"
    },
    {
        title: "Billiam Galileo",
        author: "Matthew H, Aiden P, Eric D, and Jaden E",
        engine: "Unity",
        instructions: "Go on an incredible Martian adventure with botanist/space ranger Billiam Galileo. WASD or Arrow Keys to move, Space to jump.",
        url: "https://meritacademy-games.s3-us-west-1.amazonaws.com/billiam/index.html"
    },
    {
        title: "Cat Platform",
        author: "Luke E",
        engine: "Scratch",
        instructions: "Click on the game to activate it. Go to the check mark! Press arrow keys to move, space to jump.",
        url: "https://scratch.mit.edu/projects/embed/260481630"
    },
    {
        title: "Don't Die!",
        author: "Dallin C",
        engine: "Unity",
        instructions: "WASD or Arrow Keys to move.",
        url: "https://meritacademy-games.s3-us-west-1.amazonaws.com/dont-die/index.html"
    },
    {
        title: "Flying Soldier",
        author: "Zion A, Luke E",
        engine: "Unity",
        instructions: "Space to fly, arrow keys to move. Look for the end.",
        url: "https://meritacademy-games.s3-us-west-1.amazonaws.com/flying-soldier/index.html"
    },
    {
        title: "Fun Game",
        author: "Talan J",
        engine: "Godot",
        instructions: "Click on the game to activate it. Press arrow keys to move.",
        url: "https://meritacademy-games.s3-us-west-1.amazonaws.com/fun-game/Talan.html"
    },
    {
        title: "IDK 2.0",
        author: "Sebastian P",
        engine: "Godot",
        instructions: "Click on the game to activate it. Press arrow keys to move.",
        url: "https://meritacademy-games.s3-us-west-1.amazonaws.com/idk-2/2D+Movement+Demo.html"
    },
    {
        title: "Marvelio",
        author: "Austin M",
        engine: "Scratch",
        instructions: "Arrow keys to move, get Nick Fury to the end and beat Thanos!",
        url: "https://scratch.mit.edu/projects/embed/355397939"
    },
    {
        title: "Marioish",
        author: "Wyatt H",
        engine: "Godot",
        instructions: "Click on the game to activate it. Press arrow keys to move.",
        url: "https://meritacademy-games.s3-us-west-1.amazonaws.com/marioish/Wyatt.html"
    },
    {
        title: "Maze",
        author: "Connor L",
        engine: "Godot",
        instructions: "Click on the game to activate it. Find the star! Press arrow keys to move.",
        url: "https://meritacademy-games.s3-us-west-1.amazonaws.com/maze/index.html"
    },
    {
        title: "Pygame Demo",
        author: "Katniss W",
        engine: "Pygame",
        instructions: "Learning to animate sprites in Pygame. Arrow keys to move, space to jump.",
        url: "https://repl.it/@KatnissWu/my-game?lite=true&outputonly=1"
    },
    {
        title: "Snake",
        author: "Alex B",
        engine: "Scratch",
        instructions: "Click on the game to activate it. WASD to move. Collect the stars to increase your size.",
        url: "https://scratch.mit.edu/projects/embed/23464954"
    },
    {
        title: "Sonic Dash",
        author: "Manases R",
        engine: "Godot",
        instructions: "Click on the game to activate it. Press arrow keys to move.",
        url: "https://meritacademy-games.s3-us-west-1.amazonaws.com/sonic-dash/2D+Movement+Demo.html"
    },
    {
        title: "Sypher",
        author: "Owen H",
        engine: "Godot",
        instructions: "Click on the game to activate it. Press arrow keys to move.",
        url: "https://meritacademy-games.s3-us-west-1.amazonaws.com/sypher/Owen.html"
    },
    {
        title: "Weird Platfarmer",
        author: "Isaac S",
        engine: "Godot",
        instructions: "Click on the game to activate it. Press arrow keys to move.",
        url: "https://meritacademy-games.s3-us-west-1.amazonaws.com/weird-platfarmer/Isaac.html"
    }
]

const PongInfo = [  
    {
        title: "Bad Pong",
        author: "Alex B",
        engine: "Godot",
        instructions: "Click on the game to activate it. Press WASD (left) / arrow keys (right) to move.",
        url: "https://meritacademy-games.s3-us-west-1.amazonaws.com/pong-alex/BadPong.html"
    },
    {
        title: "Mega Ultra Ball",
        author: "Ethan W",
        engine: "Godot",
        instructions: "Click on the game to activate it. Press WASD (left) / arrow keys (right) to move.",
        url: "https://meritacademy-games.s3-us-west-1.amazonaws.com/pong-ethan/MegaUltraBall.html"
    },
    {
        title: "Ping dela Pong",
        author: "Tennyson H",
        engine: "Godot",
        instructions: "Click on the game to activate it. Press WASD (left) / arrow keys (right) to move.",
        url: "https://meritacademy-games.s3-us-west-1.amazonaws.com/pong-tennyson/Pong.html"
    },
    {
        title: "Pong (Grant)",
        author: "Grant L",
        engine: "Godot",
        instructions: "Click on the game to activate it. Press WASD (left) / arrow keys (right) to move.",
        url: "https://meritacademy-games.s3-us-west-1.amazonaws.com/pong-grant/pong.html"
    },
    {
        title: "Pong (Isaac)",
        author: "Isaac S",
        engine: "Godot",
        instructions: "Click on the game to activate it. Press WASD (left) / arrow keys (right) to move.",
        url: "https://meritacademy-games.s3-us-west-1.amazonaws.com/pong-isaac/Isaac.html"
    },
    {
        title: "Pong (Luke)",
        author: "Luke E",
        engine: "Godot",
        instructions: "Click on the game to activate it. Press WASD (left) / arrow keys (right) to move.",
        url: "https://meritacademy-games.s3-us-west-1.amazonaws.com/pong-luke/Pong.html"
    },
    {
        title: "Pong (Manases)",
        author: "Manases R",
        engine: "Godot",
        instructions: "Click on the game to activate it. Press WASD (left) / arrow keys (right) to move.",
        url: "https://meritacademy-games.s3-us-west-1.amazonaws.com/pong-manases/Pong.html"
    },
    {
        title: "Pong (Talan)",
        author: "Talan J",
        engine: "Godot",
        instructions: "Click on the game to activate it. Press WASD (left) / arrow keys (right) to move.",
        url: "https://meritacademy-games.s3-us-west-1.amazonaws.com/pong-talan/Pong.html"
    }
]

const EngineUrls = {
    "Scratch": "https://scratch.mit.edu/",
    "Godot": "https://godotengine.org/",
    "Unity": "https://unity3d.com/",
    "repl.it": "https://repl.it/",
    "Pygame": "https://repl.it/talk/learn/A-Starter-Guide-to-Pygame/11741"
}



class Games extends React.Component {
    state = {
        selected: GameInfo[0]
    }

    handleClick = (e, gameArray) => {
        this.setState({selected: gameArray[parseInt(e.key)]});
    }

    textmenu = (
        <Menu 
            onClick={(e) => (this.handleClick(e, TextGamesInfo))}
            selectedKeys={[]}
        >
            {
                TextGamesInfo.map((val, i) => (
                    <Menu.Item key={"" + i}>{val.title}</Menu.Item>
                ))
            }
        </Menu>
    );

    pongmenu = (
        <Menu 
            onClick={(e) => (this.handleClick(e, PongInfo))}
            selectedKeys={[]}
        >
            {
                PongInfo.map((val, i) => (
                    <Menu.Item key={"" + i}>{val.title}</Menu.Item>
                ))
            }
        </Menu>
    );

    menu = (
        <Menu 
            onClick={(e) => (this.handleClick(e, GameInfo))}
            selectedKeys={[]}
        >
            {
                GameInfo.map((val, i) => (
                    <Menu.Item key={"" + i}>{val.title}</Menu.Item>
                ))
            }
        </Menu>
    );

    componentDidMount() {
        let frames = Array.from(document.getElementsByTagName("iframe"));
        frames.forEach((val) => {
            val.setAttribute("scrolling", "no");
        });
    }

    render() {
        return (
            <div>
                <h1>Games</h1>
                <Dropdown overlay={this.menu}>
                    <button className="ant-dropdown-link button-no-style" style={{marginBottom: 24, marginRight: 16}}>
                        Select 2D Game <Icon type="down" />
                    </button>
                </Dropdown>
                <Dropdown overlay={this.pongmenu}>
                    <button className="ant-dropdown-link button-no-style" style={{marginBottom: 24, marginRight: 16}}>
                        Select Pong Game <Icon type="down" />
                    </button>
                </Dropdown>
                <Dropdown overlay={this.textmenu}>
                    <button className="ant-dropdown-link button-no-style" style={{marginBottom: 24}}>
                        Select Text Game <Icon type="down" />
                    </button>
                </Dropdown>

                <h2 style={{textAlign: "center"}}>{this.state.selected.title}</h2>
                <h4 style={{textAlign: "center"}}>Author(s): {this.state.selected.author}&emsp;&emsp;Engine: <a href={EngineUrls[this.state.selected.engine]}>{this.state.selected.engine}</a></h4>
                <p style={{textAlign: "center"}}>{this.state.selected.instructions}</p>

                <Iframe 
                height="600"
                width="100%" 
                display="initial"
                position="relative"
                url={this.state.selected.url} />
            </div>  
        );
    }
    
}

export default Games;