// 1573568256893

function age(timestamp) {
    const today = new Date()
    const birthDate = new Date(timestamp)

    // 2019 - 1984
    let age = today.getFullYear() - birthDate.getFullYear()
    const month = today.getMonth() - birthDate.getMonth()


    if (month < 0 || month == 0 && today.getDate() < birthDate.getDate()) {
        age = age - 1
    }

    return age
}

// 2019 - 1984 = 35
// 11 - 12 = -1