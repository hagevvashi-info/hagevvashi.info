import type { ComponentPropsWithRef } from "react";
import { forwardRef } from "react";
import NextLink from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react";

export const Link = forwardRef<
  HTMLAnchorElement,
  ComponentPropsWithRef<typeof ChakraLink> &
    Omit<ComponentPropsWithRef<typeof NextLink>, "as">
>(({ children, ...props }, ref) => {
  const { href, passHref, ...others } = props;
  return (
    <NextLink href={href} passHref>
      <ChakraLink {...others} ref={ref}>
        {children}
      </ChakraLink>
    </NextLink>
  );
});
