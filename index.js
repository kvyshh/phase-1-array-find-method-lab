function superbowlWin(records) {
    const wins = records.find(win => win.result === "W");
    return (wins === undefined ? wins : wins.year);
}
