let settings = localStorage.getItem("settings");
settings=JSON.parse(settings);
document.getElementsByTagName("html")[0].dataset.theme=settings.colorMode;