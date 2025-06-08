import GameSavingLoader from "../js/app";

test('async/await test', async () => {
    try {
        const game = new GameSavingLoader();
        const response = await game.load();
        expect(response).toEqual('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}')
    }
    catch(e) {
      console.log(e);
    }
})