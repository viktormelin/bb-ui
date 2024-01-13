import { ArrowPathIcon } from '@heroicons/react/24/solid';
import Text from './ui/Text';

const LoadingSpinner = () => {
  return (
    <div className="w-full my-8 flex items-center justify-center gap-4">
      <ArrowPathIcon className="w-6 h-6 animate-spin" />
      <Text variant="xs" className="mb-0">
        Loading...
      </Text>
    </div>
  );
};

export default LoadingSpinner;
