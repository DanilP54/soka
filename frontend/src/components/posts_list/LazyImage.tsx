import { useInView } from "react-intersection-observer";

const LazyImage = ({ src }: { src: string }) => {

    const { inView, ref } = useInView({
        threshold: 0,
        triggerOnce: true,
    })

    return (
        <div ref={ref} style={{
            backgroundColor: 'grey',
            width: '100%',
            height: '300px',
            marginTop: 20,
            borderRadius: '5px'
        }}>
            {
                inView &&
                <img
                    src={src ? src : ''}
                    width={'100%'}
                    style={{ borderRadius: '5px' }}
                    height={'100%'}
                    alt="image"
                />
            }

        </div>
    )
}

export default LazyImage;