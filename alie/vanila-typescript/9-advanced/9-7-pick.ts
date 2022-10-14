{
  type Video = {
    id:string
    title:string
    url:string
    data:string
  }

  function getVideo(id:string):Video{
    return {
      id,
      title:'video',
      url:'https://..',
      data:'byte-data..'
    }
  }

  //Pick<Type, 'key extends keyof Type' > 원하는 타입들만 뽑아서 새로운 타입을 만들어준다.
  type VideoMetadata = Pick<Video, 'id' | 'title'>

  function getVideoMetadata(id: string): VideoMetadata {
    return {
      id,
      title: 'title'
    }
  }
}