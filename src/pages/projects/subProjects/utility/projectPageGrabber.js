import towerMain from '../../../../filesToUse/images/towerOfHanoiAssets/towerMainMenu.jpg';
import towerSix from '../../../../filesToUse/images/towerOfHanoiAssets/towerSixDisc.jpg';
import towerSeven from '../../../../filesToUse/images/towerOfHanoiAssets/towerSevenDisc.jpg';
import towerEight from '../../../../filesToUse/images/towerOfHanoiAssets/towerEightDisc.jpg';
import towerNine from '../../../../filesToUse/images/towerOfHanoiAssets/towerNineDisc.jpg';
import towerTen from '../../../../filesToUse/images/towerOfHanoiAssets/towerTenDisc.jpg';

const towerImages = [
    {
        id: 1,
        image: towerMain
    },
    {
        id: 2,
        image: towerSix
    }, {
        id: 3,
        image: towerSeven
    },
    {
        id: 4,
        image: towerEight
    },
    {
        id: 5,
        image: towerNine
    },
    {
        id: 6,
        image: towerTen
    },
];

towerImages.forEach((item) => {
    item.key = `tower-image-${item.id}`;
});

export const ProjectPageGrabber = [
    {
        id: 1,
        title: 'Tower of Hanoi Redux',
        imageSet: towerImages,
        description: 'While in my senior year of University I enrolled in a computer graphics course which tasked me\n' +
            'with creating some application regarding graphics. I eventually decided upon the traditional\n' +
            'Tower of Hanoi game which I would build in Unity. After the course had finished, I was left with a\n' +
            'rudimentary version of the game and felt compelled to continue my work. Over time I improved\n' +
            'the aesthetic and functions of the game leading to what I currently have displayed on my online\n' +
            'portfolio. That game is still not as complete as I would like however as I worked on it entirely on\n' +
            'my own, I am quite happy! Tower of Hanoi Redux is available on the Google Play Store and is\n' +
            'hosted on itch.io.\n',
        itchLink: '<iframe src="https://itch.io/embed/1135151?linkback=true&amp;border_width=0" width="206" height="165" frameborder="0"><a href="https://c0c0barbet.itch.io/tower-of-hanoi-redux">Tower of Hanoi Redux by C0C0Barbet</a></iframe>'
    },
    {
        id: 2,
        title: 'Prison Escape Freedom Awaits',
        imageSet: towerImages,
        description: 'In July of 2021, I was left with free time while job searching and noticed itch.io was hosting a\n' +
            'beginner’s game jam. I decided to reach out to a friend and try our luck with a simple 2D\n' +
            'platformer. The experience was fun and helped me learn how to work in a team and lead as my\n' +
            'friend had little experience with Unity. As the game was made in two weeks, forcing me out of my comfort zone. This game is hosted on itch.io and is also available on my online portfolio.\n',
        itchLink: '<iframe src="https://itch.io/embed/1120184?border_width=0&amp;fg_color=000000" width="206" height="165" frameborder="0"><a href="https://vesiiy.itch.io/prison-escape">Prison Escape: Freedom Awaits by Vesiy, C0C0Barbet</a></iframe>'
    },
    {
        id: 3, title: 'Working Title: Pandora\'s Box',
        imageSet: towerImages, description: 'soon',
        itchLink: '<iframe src="https://itch.io/embed/1135151?linkback=true&amp;border_width=0" width="206" height="165" frameborder="0"><a href="https://c0c0barbet.itch.io/tower-of-hanoi-redux">Tower of Hanoi Redux by C0C0Barbet</a></iframe>'
    }
];
