const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const player = $(".player");
const cd = $(".cd");
const heading1 = $("header h2");
const heading2 = $("header h4");
const cdThumb = $(".cd-thumb");
const audio = $("#audio");
const playBtn = $(".btn-toggle-play");
const progress = $("#progress");
const prevBtn = $(".btn-prev");
const nextBtn = $(".btn-next");
const randomBtn = $(".btn-random");
const repeatBtn = $(".btn-repeat");
const playlist = $(".playlist");
const app = {
    currentIndex: 0, // bài hát đầu tiên của mảng
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    songs: [
        {
            "id": "1",
            "name": "Chỉ Anh Hiểu Em",
            "title": "Chỉ Anh Hiểu Em",
            "singer": "Khắc Việt",
            "image": "https://i.ytimg.com/vi/DhCyS58xACk/maxresdefault.jpg",
            "audio": "http://api.mp3.zing.vn/api/streaming/audio/ZWZC8WBZ/128"
        },
        {
            "id": "2",
            "name": "Hẹn Một Mai",
            "title": "Hẹn Một Mai",
            "singer": "Bùi Anh Tuấn",
            "image": "https://i.ytimg.com/vi/6Zw-SQurWUM/maxresdefault.jpg",
            "audio": "http://api.mp3.zing.vn/api/streaming/audio/ZW78679U/128"
        },
        {
            "id": "3",
            "name": "Lạc Nhau Có Phải Muôn Đời",
            "title": "Lạc Nhau Có Phải Muôn Đời",
            "singer": "ERIK",
            "image": "https://i.ytimg.com/vi/l9XGXKDKUYk/maxresdefault.jpg",
            "audio": "http://api.mp3.zing.vn/api/streaming/audio/ZW78D0FZ/128"
        },
        {
            "id": "4",
            "name": "Chuyện Anh Vẫn Chưa Kể",
            "title": "Chuyện Anh Vẫn Chưa Kể",
            "singer": "Chi Dân",
            "image": "https://i.ytimg.com/vi/n4JRQ5clT28/maxresdefault.jpg",
            "audio": "http://api.mp3.zing.vn/api/streaming/audio/ZW8WCUW0/128"
        },
        {
            "id": "5",
            "name": "Anh Đã Quen Với Cô Đơn",
            "title": "Anh Đã Quen Với Cô Đơn",
            "singer": "SOOBIN",
            "image": "https://i.ytimg.com/vi/X7sSE3yCNLI/maxresdefault.jpg",
            "audio": "http://api.mp3.zing.vn/api/streaming/audio/ZW79FF97/128"
        },
        {
            "id": "6",
            "name": "Não Cá Vàng",
            "title": "Não Cá Vàng",
            "singer": "OnlyC, Lou Hoàng",
            "image": "https://i.ytimg.com/vi/BdqarGtAqkw/maxresdefault.jpg",
            "audio": "http://api.mp3.zing.vn/api/streaming/audio/ZW79C8FO/128"
        },
        {
            "id": "7",
            "name": "Tòng Phu",
            "title": "Tòng Phu",
            "singer": "Keyo",
            "image": "https://i.ytimg.com/vi/hjvRIpU6acQ/maxresdefault.jpg",
            "audio": "http://api.mp3.zing.vn/api/streaming/audio/ZZFDIEB6/128"
        },
        {
            "id": "8",
            "name": "Đã Lỡ Yêu Em Nhiều",
            "title": "Đã Lỡ Yêu Em Nhiều",
            "singer": "JustaTee",
            "image": "https://i.ytimg.com/vi/KhTCatAKVpk/maxresdefault.jpg",
            "audio": "http://api.mp3.zing.vn/api/streaming/audio/ZW8W6UEF/128"
        },
        {
            "id": "9",
            "name": "Ta Còn Yêu Nhau",
            "title": "Ta Còn Yêu Nhau",
            "singer": "Đức Phúc",
            "image": "https://i.ytimg.com/vi/oiikgEzTotg/maxresdefault.jpg",
            "audio": "http://api.mp3.zing.vn/api/streaming/audio/ZW8IC98I/128"
        },
        {
            "id": "10",
            "name": "Chờ Anh Nhé",
            "title": "Chờ Anh Nhé",
            "singer": "Hoàng Dũng, Hoàng Rob",
            "image": "https://i.ytimg.com/vi/kErpTLz39Ls/maxresdefault.jpg",
            "audio": "http://api.mp3.zing.vn/api/streaming/audio/ZW7U90B6/128"
        },
        {
            "id": "11",
            "name": "Giấu Đằng Sau",
            "title": "Giấu Đằng Sau",
            "singer": "Song Luân",
            "image": "https://i.ytimg.com/vi/g1JvUhXMccE/maxresdefault.jpg",
            "audio": "http://api.mp3.zing.vn/api/streaming/audio/ZW8I7AAI/128"
        },
        {
            "id": "12",
            "name": "Đừng Lo Nhé! Có Anh Đây",
            "title": "Đừng Lo Nhé! Có Anh Đây",
            "singer": "Thiên Tú",
            "image": "https://i.ytimg.com/vi/xM9eGtrIGh8/maxresdefault.jpg",
            "audio": "http://api.mp3.zing.vn/api/streaming/audio/Z6UUABUW/128"
        },
        {
            "id": "13",
            "name": "Trót Trao Duyên",
            "title": "Trót Trao Duyên",
            "singer": "NB3 Hoài Bảo, CT",
            "image": "https://i.ytimg.com/vi/zd66fekPTmg/maxresdefault.jpg",
            "audio": "http://api.mp3.zing.vn/api/streaming/audio/Z6O6ZDDW/128"
        },
        {
            "id": "14",
            "name": "Sao Cũng Được",
            "title": "Sao Cũng Được",
            "singer": "Thành Đạt",
            "image": "https://i.ytimg.com/vi/j4T0-huYsW4/maxresdefault.jpg",
            "audio": "http://api.mp3.zing.vn/api/streaming/audio/Z6WZD78I/128"
        },
        {
            "id": "15",
            "name": "Ai Rồi Cũng Sẽ Khác",
            "title": "Ai Rồi Cũng Sẽ Khác",
            "singer": "Hà Nhi",
            "image": "https://i.ytimg.com/vi/MJu_cgM6tMs/maxresdefault.jpg",
            "audio": "http://api.mp3.zing.vn/api/streaming/audio/Z6WZWIAC/128"
        },
        {
            "id": "16",
            "name": "Quả Phụ Tướng",
            "title": "Quả Phụ Tướng",
            "singer": "Dunghoangpham",
            "image": "https://i.ytimg.com/vi/UIlTTTdv7c0/maxresdefault.jpg",
            "audio": "http://api.mp3.zing.vn/api/streaming/audio/Z6ZO8B0O/128"
        },
        {
            "id": "17",
            "name": "Cưới Hông Chốt Nha",
            "title": "Cưới Hông Chốt Nha",
            "singer": "Út Nhị Mino",
            "image": "https://i.ytimg.com/vi/w_kgRzsEXeM/maxresdefault.jpg",
            "audio": "http://api.mp3.zing.vn/api/streaming/audio/Z6WOZUCE/128"
        },
        {
            "id": "18",
            "name": "Chàng Trai Của Em",
            "title": "Chàng Trai Của Em",
            "singer": "Duy Văn Phạm",
            "image": "https://i.ytimg.com/vi/7kJkNDjgOE4/maxresdefault.jpg",
            "audio": "http://api.mp3.zing.vn/api/streaming/audio/Z6UZAI8F/128"
        },
        {
            "id": "19",
            "name": "Ngủ Một Mình",
            "title": "Ngủ Một Mình",
            "singer": "HIEUTHUHAI",
            "image": "https://i.ytimg.com/vi/STjzkjnLlZ4/maxresdefault.jpg",
            "audio": "http://api.mp3.zing.vn/api/streaming/audio/Z6O6ZED0/128"
        },
        {
            "id": "20",
            "name": "Yêu Người Có Ước Mơ",
            "title": "Yêu Người Có Ước Mơ",
            "singer": "buitruonglinh",
            "image": "https://i.ytimg.com/vi/6r7jzy1LABY/maxresdefault.jpg",
            "audio": "http://api.mp3.zing.vn/api/streaming/audio/Z6UBADAF/128"
        }
    ],
    render: function () {
        const htmls = this.songs.map((song, index) => {
            return `
                        <div class="song ${index === this.currentIndex ? "active" : ""
                }" data-index="${index}">
                            <div class="thumb"
                                style="background-image: url('${song.image}')">
                            </div>
                            <div class="body">
                                <h3 class="title">${song.name}</h3>
                                <p class="author">${song.singer}</p>
                            </div>
                            <div class="option">
                                <i class="fa fa-ellipsis-h"></i>
                            </div>
                        </div>
                    `;
        });
        playlist.innerHTML = htmls.join("");
    },
    defineProperties: function () {
        Object.defineProperty(this, "currentSong", {
            get: function () {
                return this.songs[this.currentIndex];
            },
        });
    },
    handleEvents: function () { //xử lí các sự kiện
        const _this = this;
        // Xử lý CD quay / dừng
        const cdThumbAnimate = cdThumb.animate(
            [{ transform: "rotate(360deg)" }],//360 độ
            {
                duration: 10000, // 10 dây
                iterations: Infinity, // vô hạn
            }
        );
        cdThumbAnimate.pause();

        // Xử lý khi click play
        playBtn.onclick = function () {
            if (_this.isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
        };
        // Khi song được play
        audio.onplay = function () {
            _this.isPlaying = true;
            player.classList.add("playing");
            cdThumbAnimate.play();
        };
        // Khi song bị pause
        audio.onpause = function () {
            _this.isPlaying = false;
            player.classList.remove("playing");
            cdThumbAnimate.pause();
        };
        // Khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function () {
            if (audio.duration) {
                const progressPercent = Math.floor(
                    (audio.currentTime / audio.duration) * 100
                );
                progress.value = progressPercent;
            }
        };
        // Xử lý khi tua song
        progress.onchange = function (e) {
            const seekTime = (audio.duration / 100) * e.target.value;
            audio.currentTime = seekTime;
        };
        // Khi next song
        nextBtn.onclick = function () {
            if (_this.isRandom) {
                _this.playRandomSong();
            } else {
                _this.nextSong();
            }
            audio.play();
            _this.render();
            _this.scrollToActiveSong();
        };
        // Khi prev song
        prevBtn.onclick = function () {
            if (_this.isRandom) {
                _this.playRandomSong();
            } else {
                _this.prevSong();
            }
            audio.play();
            _this.render();
            _this.scrollToActiveSong();
        };
        // Xử lý bật / tắt random song
        randomBtn.onclick = function (e) {
            _this.isRandom = !_this.isRandom;
            randomBtn.classList.toggle("active", _this.isRandom);
        };
        // Xử lý lặp lại một song
        repeatBtn.onclick = function (e) {
            _this.isRepeat = !_this.isRepeat;
            repeatBtn.classList.toggle("active", _this.isRepeat);
        };
        // Xử lý next song khi audio ended
        audio.onended = function () {
            if (_this.isRepeat) {
                audio.play();
            } else {
                nextBtn.click();
            }
        };
        // Lắng nghe hành vi click vào playlist
        playlist.onclick = function (e) {
            const songNode = e.target.closest(".song:not(.active)");
            if (songNode || e.target.closest(".option")) {
                // Xử lý khi click vào song
                if (songNode) {
                    _this.currentIndex = Number(songNode.dataset.index);
                    _this.loadCurrentSong();
                    _this.render();
                    audio.play();
                }
                // Xử lý khi click vào song option
                if (e.target.closest(".option")) {
                    alert("Đã thêm thành công!!")
                }
            }
        };
    },
    scrollToActiveSong: function () {
        setTimeout(() => {
            $(".song.active").scrollIntoView({
                behavior: "smooth",
                block: "nearest",
            });
        }, 300);
    },
    loadCurrentSong: function () {
        heading1.textContent = this.currentSong.name;
        heading2.textContent = this.currentSong.singer;
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
        audio.src = this.currentSong.audio;

    },
    nextSong: function () {
        this.currentIndex++;
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0;
        }
        this.loadCurrentSong();
    },
    prevSong: function () {
        this.currentIndex--;
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1;
        }
        this.loadCurrentSong();
    },
    playRandomSong: function () {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * this.songs.length);
        } while (newIndex === this.currentIndex);

        this.currentIndex = newIndex;
        this.loadCurrentSong();
    },
    start: function () {
        // Định nghĩa các thuộc tính cho object
        this.defineProperties();
        // Lắng nghe / xử lý các sự kiện (DOM events)
        this.handleEvents();
        // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
        this.loadCurrentSong();
        // Render playlist
        this.render();
    },
};
app.start(); //chạy chương trình

