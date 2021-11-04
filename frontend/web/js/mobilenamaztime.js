
const prayerTime = {
    2021: {
        9: {
            22: [
                {
                    name: 'Bomdod',
                    time: "03:44"
                },
                {
                    name: 'Quyosh',
                    time: "10:41"
                },
                {
                    name: 'Peshin',
                    time: "16:37"
                },
                {
                    name: 'Asr',
                    time: "17:30"
                },
                {
                    name: 'Shom',
                    time: "19:43"
                },
                {
                    name: 'Xufton',
                    time: "21:07"
                }
            ],
            13: [
                {
                    name: 'Bomdod',
                    time: "03:49"
                },
                {
                    name: 'Quyosh',
                    time: "05:17"
                },
                {
                    name: 'Peshin',
                    time: "11:43"
                },
                {
                    name: 'Asr',
                    time: "17:28"
                },
                {
                    name: 'Shom',
                    time: "19:39"
                },
                {
                    name: 'Xufton',
                    time: "21:03"
                }
            ],
            30: [
                {
                    name: 'Bomdod',
                    time: "03:51"
                },
                {
                    name: 'Quyosh',
                    time: "05:18"
                },
                {
                    name: 'Peshin',
                    time: "12:28"
                },
                {
                    name: 'Asr',
                    time: "17:27"
                },
                {
                    name: 'Shom',
                    time: "19:38"
                },
                {
                    name: 'Xufton',
                    time: "21:01"
                }
            ],
            31: [
                {
                    name: 'Bomdod',
                    time: "03:42"
                },
                {
                    name: 'Quyosh',
                    time: "05:19"
                },
                {
                    name: 'Peshin',
                    time: "13:40"
                },
                {
                    name: 'Asr',
                    time: "21:00"
                },
                {
                    name: 'Shom',
                    time: "22:53"
                },
                {
                    name: 'Xufton',
                    time: "23:51"
                }
            ],
        }
    }
}
const prayerContainers = document.getElementById("mobilenamaz")
const currentDatenow = new Date();
const currentYearnow = currentDatenow.getFullYear()
const currentMonthnow = currentDatenow.getMonth() + 1
const currentDaynow = currentDatenow.getDate()
const currentprayerTime = prayerTime[currentYearnow][currentMonthnow][currentDaynow]


const createTemplates = (prayers) => {
    const namenamaz = document.createElement('div')
    namenamaz.classList.add("muslimnamaz")
    namenamaz.setAttribute('id', prayers.time)
    namenamaz.innerHTML = `
                 <div>${prayers.name}</div>
                 <b>${prayers.time}</b>
           `
    return namenamaz;
}

currentprayerTime.forEach(prayers => {
    const outin = createTemplates(prayers)
    prayerContainers.appendChild(outin)
})

const setCurrentPrayers = (prayers, timestamp) => {
    const activenow = document.querySelector(".muslimnamaz.activenow");
    if(activenow) {
        activenow.classList.remove("activenow")
    }
    const containernow = document.getElementById(prayers.time)
    containernow.classList.add("activenow")
    const totalSecond = timestamp / 1000
    const second = totalSecond % 60;
    const totalMinute = (totalSecond - second) / 60
    const minute = totalMinute % 60
    const hour = (totalMinute - minute) / 60

    const formattedSecond = ('0' + Number.parseInt(second)).slice(-2)
    const formattedMinute = ('0' + Number.parseInt(minute)).slice(-2)
    const formattedHour = ('0' + Number.parseInt(hour)).slice(-2)
    document.querySelector("#daynow").innerHTML = `${formattedHour}:${formattedMinute}:${formattedSecond}`
}


const createDates = (prayers) => {
    const [hournow, minutenow] = prayers.time.split(":")
    return new Date(currentYearnow, currentMonthnow - 1, currentDaynow, hournow, minutenow)
}

setInterval(() => {
    let currentFindeds = false
    currentprayerTime.forEach((prayers, index) => {
        const currentPrayers = createDates(prayers)
        const currentTimestamps = currentPrayers.getTime()
        const nowtoday = Date.now()

        const nextIndexs = index + 1
        if (currentFindeds) {
            return
        }
        if (nextIndexs === currentprayerTime.length) {
            if (!currentFindeds) {
                setCurrentPrayers(prayers)
            }
            return
        }
        const nextPrayers = createDates(currentprayerTime[nextIndexs])
        const nextTimestamps = nextPrayers.getTime()

        if (currentTimestamps < nowtoday && nowtoday < nextTimestamps) {
            setCurrentPrayers(prayers, nextTimestamps - nowtoday)
            currentFindeds = true
        }

        if (currentFindeds && nowtoday + 1000 > nextTimestamps) {
            document.querySelector('a[data-file]').click();
        }
    })
}, 1000)