const titleCase = str => str.split(' ')
                            .map(word => `${word[0].toUpperCase()}${word.slice(1)}`)
                            .join(' ')

console.log(titleCase("I'm a little tea pot"))