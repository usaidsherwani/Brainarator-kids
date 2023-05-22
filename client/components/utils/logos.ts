export function getCategoryLogo(category?: string) {
    switch (category?.toLowerCase()) {
        case 'golang':
            return 'https://brainarator.s3.amazonaws.com/go.svg';
        case 'python':
            return 'https://brainarator.s3.amazonaws.com/python.svg';
        case 'kubernetes':
            return 'https://brainarator.s3.amazonaws.com/kubernetes.svg';
        case 'docker':
        case 'docker swarm':
        case 'docker compose':
            return 'https://brainarator.s3.amazonaws.com/Docker.svg';
        case 'istio':
            return 'https://brainarator.s3.amazonaws.com/new/istio.svg';
        default:
            return '';
    }
}