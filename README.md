# hapi-mongooses
一款用于hapi中多mongoose连接的hapi插件

## 参数配置
```
server.register(
  require('hapi-mongooses'),
  {
    default: `mongodb://username:${encodeURIComponent('password')}@hostname:port/defaultDb`,
    other: `mongodb://username:${encodeURIComponent('password')}@hostname:port/otherDb`,
  }
)
```

## 依赖使用
```
server.dependency('hapi-mongooses', () => {
  const { mongoose, connections, ObjectId, connection, Schema } = server.plugins['hapi-mongooses']
  // const defaultConnection = connections['default']
  const defaultConnection = connection
  const otherConnection = connections['other']
})
```

## 其他说明
* ObjectId === mongoose.Types.ObjectId
