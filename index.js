import app from './app';

app.listen(app.get('port'),() => {
    console.log('app está rodando na porta ${app.get('port')}');
})