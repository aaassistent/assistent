import * as express  from 'express'

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.post('/', function (req, res) {

  // Из запроса извлекаются свойства request, session и version.
  const { request, session, version } =req.body;

  // В тело ответа вставляются свойства version и session из запроса.
  // Подробнее о формате запроса и ответа — в разделе Протокол работы навыка.
  return res.json({
    version,
    session,
    response: {

      // В свойстве response.text возвращается исходная реплика пользователя.
      // Если навык был активирован без дополнительной команды,
      // пользователю нужно сказать "Hello!".
      text: request.original_utterance || 'Hello!',

      // Свойство response.end_session возвращается со значением false,
      // чтобы диалог не завершался.
      end_session: false,
    },
  });
});

app.use('*', function (req, res) {
  res.sendStatus(404);
});

app.listen(port);