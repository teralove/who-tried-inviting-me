module.exports = function WhoTriedInvitingMe(dispatch) {
    const command = dispatch.command || dispatch.require.command;
    dispatch.hook('S_BEGIN_THROUGH_ARBITER_CONTRACT', 1, (event) => {
        if (event.type === 4) {
            let timeNow = new Date();
            let timeText = timeNow.getHours().toLocaleString(undefined, {minimumIntegerDigits: 2}) + ':' +
                timeNow.getMinutes().toLocaleString(undefined, {minimumIntegerDigits: 2}) + ':' + 
                timeNow.getSeconds().toLocaleString(undefined, {minimumIntegerDigits: 2});

            command.message(' ' + event.sender + ' sent you a party invite at ' + timeText);
        }
    })
}
