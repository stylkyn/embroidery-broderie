import {
    useColorModeValue,
    Stack,
	Box,
    Text
} from '@chakra-ui/react'
import { useFooterStore } from 'client/stores/FooterStore/FooterStore'
import { type FC } from 'react'
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa'
import { Logo } from '../Logo'
import { SocialButton } from '../SocialButton'

export const AboutInfo: FC = () => {
	const { footer: { title } } = useFooterStore();
    return <>:
        <Box>
            <Logo
                color={useColorModeValue('gray.700', 'white')}
            />
        </Box>
        <Text fontSize={'sm'}>
            {title}
        </Text>
        <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
                <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
                <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
            </SocialButton>
        </Stack>
        </>
}
