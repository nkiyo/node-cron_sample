const CronJob = require('cron').CronJob;
const job = new CronJob('* * * * * *', function() {
    console.log('## hoge ##');
}, null, true);

console.log(`${job.nextDates(10).join('\n')}`);

