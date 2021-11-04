const prayerTimes = {
    2021: {
        9: {
            22: [
                {
                    name: 'Bomdod',
                    time: "03:44"
                },
                {
                    name: 'Quyosh',
                    time: "05:14"
                },
                {
                    name: 'Peshin',
                    time: "12:29"
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
            5: [
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
            6: [
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
                    time: "15:57"
                },
                {
                    name: 'Asr',
                    time: "18:00"
                },
                {
                    name: 'Shom',
                    time: "21:40"
                },
                {
                    name: 'Xufton',
                    time: "23:51"
                }
            ],
        }
    }
}
const prayerContainer = document.getElementById("prayer")
const currentDate = new Date();
const currentYear = currentDate.getFullYear()
const currentMonth = currentDate.getMonth() + 1
const currentDay = currentDate.getDate()
const currentPrayerTimes = prayerTimes[currentYear][currentMonth][currentDay]


const createTemplate = (prayer) => {
    const div = document.createElement('div')
    div.classList.add("namaz")
    div.setAttribute('id', prayer.time)
    div.innerHTML = `
                 <div>${prayer.name}</div>
                 <b>${prayer.time}</b>
                 
           `
    return div
}

currentPrayerTimes.forEach(prayer => {
    const out = createTemplate(prayer)
    prayerContainer.appendChild(out)
})

const setCurrentPrayer = (prayer, timestamp) => {
    const active = document.querySelector(".namaz.active");
    if (active) {
        active.classList.remove("active")
    }
    const container = document.getElementById(prayer.time)
    container.classList.add("active")
    const totalSeconds = timestamp / 1000
    const seconds = totalSeconds % 60;
    const totalMinutes = (totalSeconds - seconds) / 60
    const minutes = totalMinutes % 60
    const hours = (totalMinutes - minutes) / 60

    const formattedSeconds = ('0' + Number.parseInt(seconds)).slice(-2)
    const formattedMinutes = ('0' + Number.parseInt(minutes)).slice(-2)
    const formattedHours = ('0' + Number.parseInt(hours)).slice(-2)
    document.querySelector("#days").innerHTML = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`
}


const createDate = (prayer) => {
    const [hour, minute] = prayer.time.split(":")
    return new Date(currentYear, currentMonth - 1, currentDay, hour, minute)
}

setInterval(() => {
    let currentFinded = false
    currentPrayerTimes.forEach((prayer, index) => {
        const currentPrayer = createDate(prayer)
        const currentTimestamp = currentPrayer.getTime()
        const now = Date.now()

        const nextIndex = index + 1
        if (currentFinded) {
            return
        }
        if (nextIndex === currentPrayerTimes.length) {
            if (!currentFinded) {
                setCurrentPrayer(prayer)
            }
            return
        }
        const nextPrayer = createDate(currentPrayerTimes[nextIndex])
        const nextTimestamp = nextPrayer.getTime()

        if (currentTimestamp < now && now < nextTimestamp) {
            setCurrentPrayer(prayer, nextTimestamp - now)
            currentFinded = true
        }

        if (currentFinded && now + 1000 > nextTimestamp) {
            const azanner = localStorage.getItem(azannerItem)
            if (azanner) {
                document.getElementById(azanner).querySelector('audio').play()
            }
        }
    })
}, 1000)

const azannerItem = 'azanner'

const azanner = localStorage.getItem(azannerItem)
if (azanner) {
    document.getElementById(azanner).classList.add('active')
}
const azanners = document.querySelectorAll('.azanner-item')


azanners.forEach(azanner => {
    const selectBtn = azanner.querySelector('.select-btn')
    const muteBtn = azanner.querySelector('.mute-btn')
    const pauseBtn = azanner.querySelector('.pause-btn')
    const current = document.querySelector('.azanner-item');
    selectBtn.addEventListener('click', function () {
        if (current) {
            current.classList.remove('active')
            selectBtn.classList.remove('active')
        }
        azanner.classList.add('active')
        localStorage.setItem(azannerItem, azanner.getAttribute('id'))
    })
    muteBtn.addEventListener('click', function () {
        azanner.classList.remove('active')
        localStorage.removeItem(azannerItem)
    })
    pauseBtn.addEventListener('click', function () {
        azanner.querySelector('audio').pause();
    })
})



$('.box_input').click(function () {
    $('.box_input').find('.box-input').toggleClass('change_inost');
});

$('.icons_ar').click(function () {
    $('.icons_ar').toggleClass('articles-icons');
});

