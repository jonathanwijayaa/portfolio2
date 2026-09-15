import type { FC } from 'react'
import { GitHubIcon, LinkedInIcon, InstagramIcon, MailIcon, type IconProps } from '../Icons'

export const socialIconMap: Record<string, FC<IconProps>> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  instagram: InstagramIcon,
  mail: MailIcon,
}
