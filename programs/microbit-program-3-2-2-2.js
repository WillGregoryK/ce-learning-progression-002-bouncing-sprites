
let favoriteIcons : IconNames[] = [IconNames.Heart, IconNames.Cow, IconNames.Diamond, IconNames.SmallHeart, IconNames.Ghost]

for (let i=0; i < favoriteIcons.length; i ++) {     // note the use of the length property
    favoriteIcons.reverse()
    basic.showIcon(favoriteIcons[i])
    basic.pause(100)
    
}
