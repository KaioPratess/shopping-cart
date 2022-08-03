import {useEffect} from 'react'

function About({changeBackground}) {

  useEffect(() => {
    changeBackground('about')
  }, [])

  return (
    <div className="about">
      <h1>About</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id arcu a lectus porta auctor. Integer quis aliquam mi. Nam auctor ante arcu, eget sagittis neque imperdiet nec. Maecenas sem libero, ultricies sit amet nisi in, imperdiet dapibus mauris. Aliquam sit amet tincidunt lacus, at aliquet enim. Proin quis sem ac sapien ultricies condimentum sed id tellus. Maecenas maximus maximus viverra. Aenean diam sem, finibus quis ipsum vitae, congue hendrerit nisi. Maecenas id accumsan sapien, ac aliquet massa. Maecenas ex lacus, commodo at eros vitae, consectetur hendrerit augue.
        </p>
        <p>
        Ut quis auctor lacus. Mauris et lorem lorem. Morbi pretium nisl eget magna efficitur mattis porttitor nec ex. Donec magna diam, scelerisque at justo non, interdum luctus libero. Proin mauris dolor, porta ut ex sed, ultricies mattis ex. Nullam egestas id elit a porta. Curabitur eget aliquet arcu, ut efficitur nisi. Maecenas eros diam, placerat ut ante id, viverra porta eros. Ut sed eros quis odio suscipit ultrices. In sollicitudin eros vitae eros accumsan volutpat. Nam et pellentesque lectus. Praesent consequat quam ac sapien gravida, vel sodales augue cursus. Phasellus dignissim tempus feugiat. Ut mollis lacinia mattis.
        </p>
    </div>
  )
}

export default About