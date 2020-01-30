const booru = require('booru');

const rHandler = (ctx) => {
    const args = ctx.state.command.splitArgs;
    if (args.length === 0) {
        //TODO: Implement invalid args
    }
    const keyword = args[0];
    const count = args[1] || 1;

    booru.search('safebooru', keyword, {
            limit: count,
            random: true
        })
        .then(posts => {
            posts.forEach(post => {
                ctx.replyWithPhoto(post.fileUrl)
            });
        });
}

module.exports = rHandler;